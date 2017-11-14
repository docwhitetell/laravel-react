import dva from 'dva'
import {routerRedux} from 'dva/router'
import {request} from '../services/request'
import config from '../utils/config'
export default {

    namespace: 'news',

    state: {
        list:[],
        total:null,
        current:1,
    },

    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/news') {
                    dispatch({type:'app/update',payload:{pageHeader:'News'}})
                }
            })
        },
    },

    effects: {
        *getNewsdata({payload},{put,call,select}){
            const res=yield call(request,{url:config.mockApi.news,params:{pageSize:6,page:payload}})
            if(res.status===200){
                yield put({
                    type:'updateState',
                    payload:res.data
                })
            }
        }
    },

    reducers: {
        'updateState'(state,payload){
            return {
                ...state,
                list:payload.payload.data,
                total:payload.payload.total,
                current:parseInt(payload.payload.current)
            }
        }

    },

};

