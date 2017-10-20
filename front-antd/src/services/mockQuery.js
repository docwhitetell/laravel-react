import axios from 'axios'
export async function mockQuery(data) {
    console.log(data)
    return axios({
        url: data.url,
        method:'get',
        params:data.query
    })

}