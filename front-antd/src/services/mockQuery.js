import axios from 'axios'
export async function mockQuery(data) {
    return axios({
        url: data.url,
        method:'get',
        params:data.query
    })

}