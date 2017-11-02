import dva from 'dva'
import {routerRedux} from 'dva/router'
import {mockQuery} from '../services/mockQuery'
import {query} from '../services/query'
import {post} from '../services/post'
import Cookies from 'js-cookie'
import config from '../utils/config'
import queryString from 'query-string'
import color from '../utils/theme'
import store from 'store'
export default {

    namespace: 'app',

    state: {
        user:store.get('user')?store.get('user'): null,
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
            const time=new Date()
            console.log(time+3600)
            const user=store.get('user')
            if(!user && Cookies('access_token')){
                dispatch({type: 'query'})
            }else if((user && !Cookies('access_token')) || (!user && !Cookies('access_token'))){
                if(Cookies('refresh_token')){
                    //获取access_token ,登录
                    console.log('need refresh token')
                    dispatch({
                        type:'refresh'
                    })
                }else{
                    dispatch({
                        type:'logout'
                    })
                }
            }else{

            }
        },
    },

    effects: {
        *query({payload},{put,call,select}){
                const accessToken=Cookies('access_token')
                const res=yield call(query, {url:config.api.userInfo,token:accessToken})
                if (res.status === 200) {
                    store.set('user',res.data)
                    console.log(res.data)
                    yield put({type:'update', payload:{user:res.data }})
                }
        },
        *redirectHome({payload},{put,call,select}){
            yield put(routerRedux.push('/dashboard'))
        },
        *logout({payload},{put,call,select}){
            store.clearAll()
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
            yield put(routerRedux.push('/login'))
        },
        *refresh({payload},{put,call,select}){
            const query={refresh:Cookies('refresh_token')}
            const req = yield call(mockQuery,{url:config.api.refresh,query})
            if(req.status===200){
                Cookies.set('access_token', req.data.access_token, { expires:1, path: '/' });
                Cookies.set('refresh_token', req.data.refresh_token, { expires: 7, path: '/' });
            }
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
