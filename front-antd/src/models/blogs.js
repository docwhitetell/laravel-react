import dva from 'dva'
import pathToRegexp from 'path-to-regexp'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {request} from "../services/request";
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import htmlToDraft from 'html-to-draftjs';
export default {

    namespace: 'blogs',
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
        title:'Blogs',
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
                const match = pathToRegexp('/blogs/edit/:id').exec(location.pathname)
                if (location.pathname === '/blogs') {
                    dispatch({type:'app/update',payload:{pageHeader:'My Blogs'}})
                    dispatch({
                        type: 'getUserBlogs',
                    })
                }else if(location.pathname==='/blogs/create'){
                    dispatch({type:'app/update',payload:{pageHeader:'New Blog'}})
                    dispatch({
                        type:'update',
                        payload:{current:null,editTitle:'',editorState:EditorState.createEmpty()}
                    })
                    dispatch({
                        type:'queryUserResource'
                    })
                }else if(match){
                    dispatch({type:'app/update',payload:{pageHeader:'Blog Update'}})
                    dispatch({
                        type:'queryUserResource'
                    })
                    dispatch({ type: 'query', payload: { id: match[1] } })
                }
            })
        },
    },

    effects: {
        *getUserBlogs({payload},{call,put,select}){
            const req=yield call(request,{url:config.api.blogs,withtoken:true})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{data:req.data,current:null,editTitle:'',editorState:EditorState.createEmpty()}
                })
            }
        },
        *query({payload},{call,put,select}){
            const req=yield call(request,{url:`${config.api.blogs}/${payload.id}`,withtoken:true})
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
            const req=yield call(request, {url:config.api.allFiles,withtoken:true})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{userResource:req.data}
                })
            }
        },
        *create({payload},{call,put,select}){
            yield put(routerRedux.push('/blogs/create'))
        },
        *createBlog({payload},{call,put,select}){
            const data={note:payload}
            const req=yield call(request,{url:config.api.blogCreate,withtoken:true,data:data,method:'post'})
            yield put({
                type:'update'
            })
            yield put(routerRedux.push('/blogs'))
        },
        *updateBlog({payload},{call,put,select}){
            const data={blog:payload}
            const req=yield call(request,{url:config.api.blogUpdate,withtoken:true,data:data,method:'post'})
        },
        *edit({payload},{call,put,select}){
            console.log(payload)
            yield put(routerRedux.push(`/blogs/edit/${payload}`))
        },
        *deleteBlog({payload},{call,put,select}){
            const data={blog:payload}
            const req=yield call(request,{url:config.api.blogDelete,withtoken:true,data:data,method:'post'})
            if(req.data.status){
                yield put({type:'getUserBlogs'})
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
