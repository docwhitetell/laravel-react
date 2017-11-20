import Cookies from 'js-cookie'
import store from 'store'
module.exports = {
    name: 'Material Design',
    CORS: [],
    openPages: ['/'],
    api: {
        /*
        domain:'http://你的laravel项目地址',
        userLogin:'http://你的laravel项目地址/api/login',
        userInfo:'http://你的laravel项目地址/api/current-user',
        userList:'http://你的laravel项目地址/api/user',
        addUser:'http://你的laravel项目地址/api/register',
        deleteUser:'http://你的laravel项目地址/api/user/delete/'
        */
        domain:'http://admin.docwhite.cn',
        userLogin:'http://admin.docwhite.cn/v1/login',
        refresh:'http://admin.docwhite.cn/v1/refresh',
        userInfo:'http://admin.docwhite.cn/v1/current-user',
        userList:'http://admin.docwhite.cn/v1/user',
        addUser:'http://admin.docwhite.cn/v1/register',
        deleteUser:'http://admin.docwhite.cn/v1/user/delete',
        notes:'http://admin.docwhite.cn/v1/user/notes',
        addNote:'http://admin.docwhite.cn/v1/user/addnote',
        updateNote:'http://admin.docwhite.cn/v1/user/note/update',
        deleteNote:'http://admin.docwhite.cn/v1/user/note/delete',
        fileUpload:'http://admin.docwhite.cn/v1/file/upload',
        allFiles:'http://admin.docwhite.cn/v1/user/files/all',
        userImgs:'http://admin.docwhite.cn/v1/user/imgs',
        userVideos:'http://admin.docwhite.cn/v1/user/videos',
        deleteFiles:'http://admin.docwhite.cn/v1/user/files/delete'
    },
    mockApi:{
        news:'http://localhost:8000/mock/news',
        dashboard:'http://localhost:8000/mock/dashboard',
        search:'http://localhost:8000/mock/search-word',
    },
    authenticHeaders:{
        'Accept':'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':'Bearer '+Cookies('access_token')
    }
}
