import dva from 'dva'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {post} from '../services/post'
import {query} from "../services/query";
export default {

    namespace: 'notes',
    state:{
        msg:null,
        list:[]
    },
    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/notes') {
                    dispatch({
                        type: 'getUserNote',
                    })
                }
            })
        },
    },

    effects: {
        *getUserNote({payload},{call,put,select}){
            const accessToken=Cookies('access_token')
            const req=yield call(query,{url:config.api.notes,token:accessToken})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{list:req.data}
                })
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
