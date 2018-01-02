import axios from 'axios'
import config from '../utils/config'
import Cookies from 'js-cookie'

export async function request(data) {
    const csrf_token=document.getElementsByTagName('meta')['csrf-token'].getAttribute('content')
    const  authenticHeaders={
        'Accept':'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN':csrf_token,
        'Authorization':'Bearer '+Cookies('access_token')
    }
    return axios({
        url: data.url,
        method: data.method?data.method:'get',
        headers:data.withtoken?authenticHeaders:{'X-CSRF-TOKEN':csrf_token},
        data: data.data?data.data:null,
        params:data.params?data.params:null
    }).then(res=>{
        return res
    }).catch(error=>{
        if (error.response) {
            return error.response
        } else if (error.request) {
            return error.request
        } else {
            return error
        }
    })

}