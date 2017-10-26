import dva from 'dva'
import {routerRedux} from 'dva/router'
import queryString from 'query-string'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {query} from '../services/query'
import {post} from '../services/post'
export default {

    namespace: 'users',

    state: {
        dialogopen: false,
        dialogLoading:false,
        error:{
            name:null,
            email:null,
            password:null,
            password_confirmation:null,
        },
        title:'Users',
        column: [
            {id: 'id', numeric: true, disablePadding: true, label: 'Id'},
            {id: 'name', numeric: false, disablePadding: false, label: 'Name'},
            {id: 'email', numeric: false, disablePadding: false, label: 'email'},
            {id: 'created_at', numeric: false, disablePadding: false, label: 'Created_at'},
        ],
        order: 'asc',
        orderBy: 'id',
        selected: [],
        data:[],
        page: 1,
        rowsPerPage: 10,
        total:0,
        last_page:null,
    },

    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/user') {
                    const payload = location.query || { page: 1, rowsPerPage: 10 }
                    dispatch({
                        type: 'getUserList',
                        payload,
                    })
                }
            })
        },
    },

    effects: {
        *getUserList({payload},{put,call,select}){
            yield put({type:'loading'})
            /*获取state*/
            const accessToken=Cookies('access_token')
            const res=yield call(query, {url:config.api.userList,token:accessToken,payload})
                if(res.status===200){
                    //console.log(res)
                    const {current_page,data,total,last_page}=res.data
                    const newState={
                        data:data,total:total,page:current_page,last_page:last_page,
                    }
                    yield put({type:'update',payload:newState})
            }

        },
        *deleteUser({payload},{put,call,select}){
            /*获取全局state*/
            const { users } = yield (select(_ => _))
            const accessToken=Cookies('access_token')
            const params={users:payload}
            /*发起删除异步请求*/
            const res=yield call(query, {url:config.api.deleteUser,token:accessToken,params})
            /*删除成功后刷新数据*/
            yield put({type:'getUserList',payload:{page:users.page,rowsPerPage:users.rowsPerPage}})
        },
        *addUser({payload},{put,call,select}){
          /*  yield put({type:'dialogLoading'})*/
            const accessToken=Cookies('access_token')
            const res=yield call(post, {url:config.api.addUser,token:accessToken,data:payload})
          /*  yield put({type:'dialogLoading'})*/
            if(res.data.error===true){
                yield put({type:'updateErrorMsg',payload:res.data.msg})
            }
            if(res.data.status===true){
                yield put({
                    type:'getUserList',payload:{ page: 1, rowsPerPage: 10 }
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
                loading:!state.loading
            }
        },
        'dialogLoading'(state){
            return{
                ...state,
                dialogLoading:!state.dialogLoading
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
