import axios from 'axios'
import config from '../utils/config'
import Cookies from 'js-cookie'
export async function login(data) {
    return axios({
        url: config.api.userLogin,
        method: 'post',
        data: data
    })

}