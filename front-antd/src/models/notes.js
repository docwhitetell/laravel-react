import dva from 'dva'
import pathToRegexp from 'path-to-regexp'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {request} from "../services/request";
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
            {id: 'updated_at', numeric: false, disablePadding: false, label: 'updated_at'},
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

        userResource:[],
        resourcePagination: {current:1,pageSize:5},

    },
    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                const match = pathToRegexp('/edit/:id').exec(location.pathname)
                dispatch({type:'app/update',payload:{pageHeader:'Notes'}})
                if (location.pathname === '/notes') {
                    dispatch({
                        type: 'getUserNote',
                    })
                }else if(location.pathname==='/note/add'){
                    dispatch({
                        type:'update',
                        payload:{current:null,editTitle:'',editorState:EditorState.createEmpty()}
                    })
                    dispatch({
                        type:'queryUserResource'
                    })
                }else if(match){
                    console.log(match[1]);
                    dispatch({
                        type:'queryUserResource'
                    })
                    dispatch({ type: 'query', payload: { id: match[1] } })
                }
            })
        },
    },

    effects: {
        *getUserNote({payload},{call,put,select}){
            const headers={
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            }
            const req=yield call(request,{url:config.api.notes,headers:headers})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{data:req.data,current:null,editTitle:'',editorState:EditorState.createEmpty()}
                })
            }
        },
        *query({payload},{call,put,select}){
            const headers={
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            }
            const req=yield call(request,{url:config.api.notes+'/'+payload.id,headers:headers})
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
        *queryUserResource({payload},{call,put,select}){
            const headers={
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            }
            const req=yield call(request, {url:config.api.allFiles,headers:headers})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{userResource:req.data}
                })
            }
        },
        *create({payload},{call,put,select}){

            yield put(routerRedux.push('/note/add'))
        },
        *createNote({payload},{call,put,select}){
            const headers={
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            }
            const data={note:payload}
            const req=yield call(request,{url:config.api.addNote,headers:headers,data:data,method:'post'})
            yield put({
                type:'update'
            })
            yield put(routerRedux.push('/notes'))
        },
        *updateNote({payload},{call,put,select}){
            const headers={
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            }
            const data={note:payload}
            const req=yield call(request,{url:config.api.updateNote,headers:headers,data:data,method:'post'})
        },
        *edit({payload},{call,put,select}){
            console.log(payload)
            yield put(routerRedux.push('/edit/'+payload))
        },
        *deleteNote({payload},{call,put,select}){
            const headers={
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            }
            const data={note:payload}
            const req=yield call(request,{url:config.api.deleteNote,headers:headers,data:data,method:'post'})
            if(req.data.status){
                yield put({type:'getUserNote'})
            }
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
