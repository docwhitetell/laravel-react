import dva from 'dva'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {post} from '../services/post'
export default {

    namespace: 'posts',
    state:{
        msg:null,
    },
    subscriptions: {

    },

    effects: {
        *postUserNote({payload},{call,put,select}){
            console.log(payload)
            const data={note:payload}
            const accessToken=Cookies('access_token')
            const req=yield call(post,{url:config.api.addNote,token:accessToken,data})
            yield put({
                type:'update'
            })

        }
    },

    reducers: {
        'update'(state){
            return{
                ...state,
                msg:'null'
            }
        }
    },

};
