import dva from 'dva'
import {routerRedux} from 'dva/router'
import {mockQuery} from '../services/mockQuery'
import config from '../utils/config'
export default {

    namespace: 'dashboard',

    state: {
            nd:[],
            pd:[],
            ud:[],
            bd:[],
            numberCard:[],
    },

    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/dashboard') {
                    dispatch({
                        type: 'getData',
                    })
                }
            })
        },
    },

    effects: {
        *getData({payload},{put,call,select}){
            const res = yield call(mockQuery,{url:config.mockApi.dashboard,})
            //console.log(res)
            if(res.status===200){
                yield put({
                    type:'update',
                    payload:res.data
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
