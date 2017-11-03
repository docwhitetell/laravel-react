import dva from 'dva'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {post} from '../services/post'
import {query} from '../services/query'
import store from 'store'
export default {

    namespace: 'files',
    state:{
        filesList:[],
        open:store.get('open')?store.get('open'):[],
        alert:store.get('alert')?store.get('alert'):[],
        tabs:0,
    },
    subscriptions: {
      /*  setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/upload/my-files') {
                    dispatch({
                        type: 'query',
                    })
                }
            });
        },*/
    },

    effects: {
        *query({payload},{call,put,select}){
            const accessToken=Cookies('access_token')
            const req=yield call(query, {url:config.api.userFiles,token:accessToken})
            if(req.status===200){
                let open=[],alert=[]
                req.data.map((item,index)=>{
                    open[index]=false
                    alert[index]=false
                })
              /*  store.set('filesList',req.data)*/
                store.set('open',open)
                store.set('alert',alert)
                yield put({
                    type:'update',
                    payload:{filesList:req.data,open:open,alert:alert}
                })
            }
        },
        *delete({payload},{call,put,select}) {
            const accessToken=Cookies('access_token')
            const data={id:payload}
            console.log(data)
            const req=yield call(query, {url:config.api.deleteFiles,token:accessToken,payload:data})
            if(req.data.status==='success'){
                yield put({
                    type:'query'
                })
            }
        }
    }
    ,

    reducers: {
        'update'(state,payload){
            return {
                ...state,
                ...payload.payload
            }
        },
        'dialogOpen'(state,payload){
            let newState=state.open
            newState.map((v,i)=>{
                v=false
            })
            newState[payload.payload]=true
            return{
                ...state,
                open:newState
            }
        },
        'dialogClose'(state,payload){
            let newState=state.open
            newState[payload.payload]=false
            return {
                ...state,
                open:newState
            }
        },
        'alertOpen'(state,payload){
            let newState=state.alert
            newState.map((v,i)=>{
                v=false
            })
            newState[payload.payload]=true
            console.log(newState)
            return{
                ...state,
                alert:newState
            }
        },
        'alertClose'(state,payload){
            let newState=state.alert
            newState[payload.payload]=false
            return {
                ...state,
                alert:newState
            }
        },
    },

};
