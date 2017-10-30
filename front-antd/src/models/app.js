import dva from 'dva'
import {routerRedux} from 'dva/router'
import {query} from '../services/query'
import Cookies from 'js-cookie'
import config from '../utils/config'
import queryString from 'query-string'
import color from '../utils/theme'

export default {

    namespace: 'app',

    state: {
        user:null,
        mobileOpen: false,
        dropDown:{notes:true,ui:true},
        test:false,
        anchorEl: null,
        open: false,
        locationPathname: '',
        locationQuery: {},
        theme:color.colors.blue,
        currentColor:'blue',
        colors:color,
        canChoice:color.canChoice
    },

    subscriptions: {
        setupHistory ({ dispatch, history }) {
            history.listen((location) => {
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
        'update'(state,payload){
            return {...state,...payload.payload}
        },
        'dropdownShowHide'(state,payload) {
            console.log(payload)
            switch (payload.payload){
                case 'notes':
                    return{
                        ...state,
                        dropDown:{notes:!state.dropDown.notes,ui:state.dropDown.ui}
                    }
                case 'ui':{
                    return{
                        ...state,
                        dropDown:{notes:state.dropDown.notes,ui:!state.dropDown.ui}
                    }
                }
                default:
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
        },

    },

};
