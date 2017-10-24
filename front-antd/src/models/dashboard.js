import dva from 'dva'
import {routerRedux} from 'dva/router'
import {mockQuery} from '../services/mockQuery'
import config from '../utils/config'
export default {

    namespace: 'dashboard',

    state: {
        data:{
            nd:[],
            pd:[],
            ud:[],
            bd:[],
        },
    },

    subscriptions: {

    },

    effects: {
        *getData({payload},{put,call,select}){
            const res = yield call(mockQuery,{url:config.mockApi.dashboard,})
            //console.log(res)
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
                data:{
                    nd:payload.payload.nd,
                    pd:payload.payload.pd,
                    ud:payload.payload.ud,
                    bd:payload.payload.bd,
                }
            }
        }
    },

};
