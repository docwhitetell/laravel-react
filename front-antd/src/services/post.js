import axios from 'axios'
export async function post(data) {
    return axios({
        //url: data.url+'?page='+data.page,
        url: data.url,
        method:'post',
        headers: {
            'Accept':'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization':'Bearer '+data.token
        },
        data:data.data
    })

}