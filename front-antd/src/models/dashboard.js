import dva from 'dva'
import {routerRedux} from 'dva/router'
import {mockQuery} from '../services/mockQuery'
import config from '../utils/config'
export default {

    namespace: 'dashboard',

    state: {
        nd: [],
        pd: [],
        ud: [],
        bd: [],
        numberCard: [],
        tabs: 0,
        menuEl:null,
        cardMenu:false,

        search: [],
        pagination: {current:1,pageSize:5},

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
        },
        *getTableData({payload},{put,call,select}){
            const query={page:payload.current,pageSize:payload.pageSize}
            const res = yield call(mockQuery,{url:config.mockApi.search,query:query})
            if(res.status===200){
                const data={search:res.data.data,pagination:{current:payload.current,pageSize:payload.pageSize,totle:res.data.total}}
                yield put({type:'update',payload:data})
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
