import dva from 'dva'
import {routerRedux} from 'dva/router'
import {request} from '../services/request'
import {routeMiddleware} from '../services/routeMiddleware'
import Cookies from 'js-cookie'
import config from '../utils/config'
import queryString from 'query-string'
import color from '../utils/theme'
import store from 'store'
const currentColor=store.get('currentColor')?store.get('currentColor'):'blue'

let currentTheme= null;
switch(currentColor){
    case "blue":
        currentTheme=color.colors.blue
        break;
    case 'pink':
        currentTheme=color.colors.pink
        break;
    case 'indigo':
        currentTheme=color.colors.indigo
        break;
    case 'red':
        currentTheme=color.colors.red
        break;
    case 'purple':
        currentTheme=color.colors.purple
        break;
    case 'cyan':
        currentTheme=color.colors.cyan
        break;
    case 'teal':
        currentTheme=color.colors.teal
        break;
    case 'green':
        currentTheme=color.colors.green
        break;
    case 'yellow':
        currentTheme=color.colors.yellow
        break;
    case 'amber':
        currentTheme=color.colors.amber
        break;
    case 'orange':
        currentTheme=color.colors.orange
        break;
    case 'grey':
        currentTheme=color.colors.grey
        break;
    default:
        currentTheme=color.colors.blue
}

export default {

    namespace: 'app',

    state: {
        user:store.get('user')?store.get('user'): null,
        mobileOpen: false,
        dropDown:store.get('dropDown')?store.get('dropDown'):{notes:false,ui:false,upload:false},
        test:false,
        anchorEl: null,
        open: false,
        locationPathname: '',
        locationQuery: {},
        theme:currentTheme,
        currentColor:currentColor,
        colors:color,
        canChoice:color.canChoice,
        pageHeader:null,

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

        setup ({ dispatch,history }) {
            console.log(new Date())
            let pathname=history.location.pathname
            routeMiddleware(pathname)
            if(!routeMiddleware(pathname)){
                const user=store.get('user')
                if(Cookies('access_token')){
                    dispatch({type: 'query'})
                }else if(!Cookies('access_token')){
                    if(Cookies('refresh_token')){
                        //获取access_token ,登录
                        console.log('need refresh token')
                        dispatch({
                            type:'refresh'
                        })
                    }else{
                        dispatch({type:'logout'})
                    }
                }else{
                    console.log(' quering')
                    dispatch({type: 'query'})
                }
            }

        },
    },

    effects: {
        *query({payload},{put,call,select}){
                const res=yield call(request, {url:config.api.userInfo,withtoken:true,method:'get'})
                console.log('query end')
                if(res){
                    if(res.status===200){
                        store.set('user',res.data)
                        console.log(res.data)
                        yield put({type:'update', payload:{user:res.data }})
                    }else if(res.status===0){
                        console.log(res)
                        yield put({type:'logout'})
                    }else{
                        yield put({type:'logout'})
                    }
                }
        },
        *redirectHome({payload},{put,call,select}){
            yield put(routerRedux.push('/dashboard'))
        },
        *logout({payload},{put,call,select}){
            store.clearAll()
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
            yield put(routerRedux.push('/'))
        },
        *refresh({payload},{put,call,select}){
            const query={refresh:Cookies('refresh_token'),user:store.get('user')}
            const req = yield call(request,{url:config.api.refresh,data:query,method:'post'})
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
            switch (payload.payload){
                case 'notes':
                    const data={notes:!state.dropDown.notes,ui:state.dropDown.ui,upload:state.dropDown.upload}
                    store.set('dropDown',data)
                    return{
                        ...state,
                        dropDown:{notes:!state.dropDown.notes,ui:state.dropDown.ui,upload:state.dropDown.upload}
                    }
                case 'ui':{
                    const data={notes:state.dropDown.notes,ui:!state.dropDown.ui,upload:state.dropDown.upload}
                    store.set('dropDown',data)
                    return{
                        ...state,
                        dropDown:data
                    }
                }
                case 'upload':{
                    const data={notes:state.dropDown.notes,ui:state.dropDown.ui,upload:!state.dropDown.upload}
                    store.set('dropDown',data)
                    return {
                        ...state,
                        dropDown: data
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
