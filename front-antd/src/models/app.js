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
