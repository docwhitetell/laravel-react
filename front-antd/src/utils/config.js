import Cookies from 'js-cookie'
import store from 'store'
module.exports = {
    name: 'Doc White',
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
        domain:'http://www.gitbase.com',
        userLogin:'http://www.gitbase.com/v1/login',
        refresh:'http://www.gitbase.com/v1/refresh',
        userInfo:'http://www.gitbase.com/v1/current-user',
        userList:'http://www.gitbase.com/v1/user',
        addUser:'http://www.gitbase.com/v1/register',
        deleteUser:'http://www.gitbase.com/v1/user/delete',
        notes:'http://www.gitbase.com/v1/user/notes',
        addNote:'http://www.gitbase.com/v1/user/addnote',
        updateNote:'http://www.gitbase.com/v1/user/note/update',
        deleteNote:'http://www.gitbase.com/v1/user/note/delete',
        fileUpload:'http://www.gitbase.com/v1/file/upload',
        allFiles:'http://www.gitbase.com/v1/user/files/all',
        userImgs:'http://www.gitbase.com/v1/user/imgs',
        userVideos:'http://www.gitbase.com/v1/user/videos',
        deleteFiles:'http://www.gitbase.com/v1/user/files/delete'
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
