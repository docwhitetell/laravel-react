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
        open:[]
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
                let open=[]
                req.data.map((item,index)=>{open[index]=false})
                store.set('filesList',req.data)
                yield put({
                    type:'update',
                    payload:{filesList:req.data,open:open}
                })
            }
        }
    },

    reducers: {
        'update'(state,payload){
            return {
                ...state,
                ...payload.payload
            }
        }
    },

};
