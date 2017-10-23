import dva from 'dva'
import {routerRedux} from 'dva/router'

import Cookies from 'js-cookie'
import config from '../utils/config'
import {query} from '../services/query'
import {post} from '../services/post'
export default {

    namespace: 'users',

    state: {
        user_data:[].sort((a, b) => (a.id < b.id ? -1 : 1)),
        loading:false,

        pagination: {
            pageSize:5,
        },
        dialogopen: false,
        selectedRowKeys: [], // Check here to configure the default column
        dialogLoading:false,

        error:{
            name:null,
            email:null,
            password:null,
            password_confirmation:null,
        },


        order: 'asc',
        orderBy: 'calories',
        selected: [],
       /* data: [].sort((a, b) => (a.created_at < b.created_at ? -1 : 1)),*/
        data:[],
        page: 1,
        rowsPerPage: 5,
        total:0,
        last_page:null,
    },

    subscriptions: {
        setup ({ dispatch }) {
            dispatch({ type: 'getUserList',payload:{page:1,rowsPerPage:5} })
        },
    },

    effects: {
        *getUserList({payload},{put,call,select}){
            const accessToken=Cookies('access_token')
          /*  yield put({type:'loading'})*/
            console.log(payload)
            const params=payload
            const res=yield call(query, {url:config.api.userList,token:accessToken,params})
                if(res.status===200){
                    //console.log(res)
                    const {current_page,data,total,last_page}=res.data
                    const newState={
                        data:data,total:total,page:current_page,last_page:last_page
                    }
                    //yield put({type:'update',payload:res.data})
                    yield put({type:'update',payload:newState})
            }
        },
        *deleteUser({payload},{put,call,select}){
            const accessToken=Cookies('access_token')
            const res=yield call(query, {url:payload.href,token:accessToken})

            yield put({type:'getUserList',payload:{current:payload.current}})
        },
        *addUser({payload},{put,call,select}){
            yield put({type:'dialogLoading'})
            const accessToken=Cookies('access_token')
            const res=yield call(post, {url:config.api.addUser,token:accessToken,data:payload})
            yield put({type:'dialogLoading'})
            if(res.data.error===true){
                yield put({type:'updateErrorMsg',payload:res.data.msg})
            }
            if(res.data.status===true){
                yield put({
                    type:'getUserList',
                })
                yield put({type:'showOrHideDialog'})
            }
        },
        *changeRowsPerPage({payload},{put,call,select}){
            yield put({
                type:'update',
                payload
            })
            yield put({
                type:'getUserList',
                payload
            })
        }
    },

    reducers: {
        'update'(state,payload){
            const newState=payload.payload
            return{
                ...state,
                ...newState
            }
        },
        'loading'(state){
            return{
                ...state,
                loading:true
            }
        },
        'dialogLoading'(state){
            return{
                ...state,
                dialogLoading:!state.dialogLoading
            }
        },
        'updateState'(state,payload){
            return {
                ...state,
                user_data:payload.payload.data,
                loading:false,
                pagination:{
                    total:payload.payload.total,
                    pageSize:payload.payload.per_page,
                    current:payload.payload.current_page
                }
            }
        },
        'showOrHideDialog'(state){
            return{
                ...state,
                dialogopen:!state.dialogopen,
                error:{
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null,
                }
            }
        },
        'updateErrorMsg'(state,payload){
            return{
                ...state,
                error:payload.payload
            }
        }


    },

};
