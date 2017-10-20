import dva from 'dva'
import {routerRedux} from 'dva/router'
import {query} from '../services/query'
import Cookies from 'js-cookie'
import config from '../utils/config'
export default {

    namespace: 'app',

    state: {
        user:null,
        mobileOpen: false,
        dropDown1:true,
        test:false
    },

    subscriptions: {

    },

    effects: {
        *queryUser({payload},{put,call,select}){
            if(!payload && Cookies('access_token')){
                console.log('should query user')
                const accessToken=Cookies('access_token')
                const res=yield call(query, {url:config.api.userInfo,token:accessToken})
                if (res.status === 200) {
                    yield put({
                        type:'updateUser',
                        payload:res.data
                    })
                }
            }else if(!Cookies('access_token') ){
                console.log('no login')
                yield put({
                    type:'updateUser',
                    payload:null
                })
                yield put(routerRedux.push('/login'))
            }else if(payload && Cookies('access_token')){
                console.log('has login')
            }else{
            }

        }
    },

    reducers: {
        'dropdownShowHide'(state,payload) {
            console.log(payload)
            return {
                ...state,
                dropDown1:!state.dropDown1
            }
        },
        'drawerShowHide'(state){
            return {
                ...state,
                mobileOpen:!state.mobileOpen
            }
        },
        'updateUser'(state,payload){
            return {
                ...state,
                user:payload.payload
            }
        },

    },

};
