import dva from 'dva'
import {routerRedux} from 'dva/router'
import {request} from '../services/request'
import Cookies from 'js-cookie'
import config from '../utils/config'
export default {

    namespace: 'login',

    state: {
        errorMsg:''
    },

    subscriptions: {
        setup ({ dispatch }) {
            dispatch({ type: 'checkLogin' })
        },
    },

    effects: {
        *checkLogin({payload},{put,call,select}){
            if(Cookies('access_token')){
                yield put(routerRedux.push('/dashboard'))
            }
        },
        * login ({payload,}, { put, call, select }) {
            const res = yield call(request, {url:config.api.userLogin,data:payload,method:'post'})
            if(res.data.error){
                console.log(res.data.error)
                yield put({
                    type:'updateError',
                    payload:res.data.error
                })
            }else if(res.data.success){
                Cookies.set('access_token', res.data.token.access_token, { expires: 1, path: '/' });
                Cookies.set('refresh_token', res.data.token.refresh_token, { expires: 7, path: '/' });
                yield put({
                    type:'app/query'
                })
                yield put(routerRedux.push('/dashboard'))
            }
        },
    },

    reducers: {
        'updateError'(state,payload){
            return {
                ...state,
                errorMsg:payload.payload
            }
        },

    },

};
