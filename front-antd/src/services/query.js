import axios from 'axios'
export async function query(data) {
        return axios({
            //url: data.url+'?page='+data.page,
            url: data.url,
            method:'get',
            headers: {
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+data.token
            },
            params:{
                page:data.page
            },
        })

}