import dva from 'dva'
import {routerRedux} from 'dva/router'
import {query} from '../services/query'
import Cookies from 'js-cookie'
import config from '../utils/config'
import queryString from 'query-string'
export default {

    namespace: 'app',

    state: {
        user:null,
        mobileOpen: false,
        dropDown1:true,
        test:false,
        anchorEl: null,
        open: false,

        locationPathname: '',
        locationQuery: {},
    },

    subscriptions: {
        setupHistory ({ dispatch, history }) {
            history.listen((location) => {
        /*        if(location.pathname==='/user'){
                    dispatch({ type: 'users/getUserList',payload:{page:1,rowsPerPage:10} })
                }*/
                dispatch({
                    type: 'updateState',
                    payload: {
                        locationPathname: location.pathname,
                        locationQuery: queryString.parse(location.search),
                    },
                })
            })
        },

        setup ({ dispatch }) {
            dispatch({ type: 'query' })
        },
    },

    effects: {
        *query({payload},{put,call,select}){
            if(Cookies('access_token')){
                console.log('should query user')
                const accessToken=Cookies('access_token')
                const res=yield call(query, {url:config.api.userInfo,token:accessToken})
                if (res.status === 200) {
                    yield put({type:'updateUser', payload:res.data })
                }
            }else{
                console.log('should login')
                yield put({type:'updateUser', payload:null })
                yield put({type:'logout'})
            }
        },
        *redirectHome({payload},{put,call,select}){
            yield put(routerRedux.push('/dashboard'))
        },
        *logout({payload},{put,call,select}){
            yield put(routerRedux.push('/login'))
        }
    },

    reducers: {
        updateState (state, { payload }) {
            return {
                ...state,
                ...payload,
            }
        },
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
        'userDropdown'(state,payload){
            console.log(payload)
            return{
                ...state,
                open:true,
                anchorEl: payload.payload
            }
        },
        'userDropdownClose'(state){
            return {...state,open:false}
        }

    },

};
