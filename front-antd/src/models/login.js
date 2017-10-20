import dva from 'dva'
import {routerRedux} from 'dva/router'
import {login} from '../services/login'
import Cookies from 'js-cookie'
export default {

    namespace: 'login',

    state: {
        errorMsg:''
    },

    subscriptions: {

    },

    effects: {
        *loginSuccess({payload},{put,call,select}){
            yield put(routerRedux.push('/dashboard'))
        },
        * login ({
                     payload,
                 }, { put, call, select }) {
            //console.log(payload)
            const res = yield call(login, payload)
            //console.log(data)
            if(res.data.error){
                console.log(res.data.error)
                yield put({
                    type:'updateError',
                    payload:res.data.error
                })
            }else if(res.data.success){
                Cookies.set('access_token', res.data.token.access_token, { expires: 7, path: '/' });
                Cookies.set('refresh_token', res.data.token.refresh_token, { expires: 7, path: '/' });
                Cookies.set('expires_in', res.data.token.expires_in, { expires: 7, path: '/' });
                yield put(routerRedux.push('/dashboard'))
            }
            //JSON.parse(data)
            //const result=JSON.parse(data).success
            //console.log(JSON.parse(data))
            /*if(result){
                yield put(routerRedux.push('/dashboard'))
            }*/
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
