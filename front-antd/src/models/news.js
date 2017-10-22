import dva from 'dva'
import {routerRedux} from 'dva/router'
import {mockQuery} from '../services/mockQuery'
import config from '../utils/config'
export default {

    namespace: 'news',

    state: {
        list:[],
        total:null,
        current:1,
    },

    subscriptions: {
    },

    effects: {
        *getNewsdata({payload},{put,call,select}){
            const res=yield call(mockQuery,{url:config.mockApi.news,query:{pageSize:6,page:payload}})
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

