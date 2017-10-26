import dva from 'dva'
import pathToRegexp from 'path-to-regexp'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {post} from '../services/post'
import {query} from "../services/query";
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import htmlToDraft from 'html-to-draftjs';
export default {

    namespace: 'notes',
    state:{
        msg:null,
        data:[],
        column: [
            {id: 'id', numeric: true, disablePadding: true, label: 'Id'},
            {id: 'title', numeric: false, disablePadding: false, label: 'Title'},
            {id: 'content', numeric: false, disablePadding: false, label: 'Content'},
            {id: 'created_at', numeric: false, disablePadding: false, label: 'Created_at'},
            {id: 'action', numeric: false, disablePadding: false, label: 'Edit'},
        ],
        title:'Notes',
        order: 'asc',
        orderBy: 'id',
        selected: [],
        page: 1,
        rowsPerPage: 10,
        total:0,
        last_page:null,

        current:{},
        editTitle:'',
        editorState:EditorState.createEmpty(),
    },
    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                const match = pathToRegexp('/edit/:id').exec(location.pathname)
                if (location.pathname === '/notes') {
                    dispatch({
                        type: 'getUserNote',
                    })
                }
                if (match) {
                    console.log(match[1]);
                    dispatch({ type: 'query', payload: { id: match[1] } })
                }
            })
        },
    },

    effects: {
        *getUserNote({payload},{call,put,select}){
            const accessToken=Cookies('access_token')
            const req=yield call(query,{url:config.api.notes,token:accessToken})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{data:req.data}
                })
            }
        },
        *query({payload},{call,put,select}){
            const accessToken=Cookies('access_token')
            const req=yield call(query,{url:config.api.notes+'/'+payload.id,token:accessToken})
            if(req.status===200){

                const html=req.data.content
                //console.log(html)
                const contentBlock = htmlToDraft(html);
                let editorState
                if (contentBlock) {
                    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                    editorState = EditorState.createWithContent(contentState);
                }
                editorState=editorState?editorState:EditorState.createEmpty()
                yield put({type:'update',payload:{current:req.data,editTitle:req.data.title,editorState:editorState}})
            }
        },
        *createNote({payload},{call,put,select}){
            console.log(payload)
            const data={note:payload}
            const accessToken=Cookies('access_token')
            const req=yield call(post,{url:config.api.addNote,token:accessToken,data})
            yield put({
                type:'update'
            })
        },
        *updateNote({payload},{call,put,select}){
            console.log(payload)
            const accessToken=Cookies('access_token')
            const data={note:payload}
            const req=yield call(post,{url:config.api.updateNote,token:accessToken,data})
        },
        *edit({payload},{call,put,select}){
            console.log(payload)
            yield put(routerRedux.push('/edit/'+payload))
        }
    },

    reducers: {
        'update'(state,payload){
            return{
                ...state,
                ...payload.payload
            }
        }
    },

};
