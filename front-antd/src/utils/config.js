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
        userLogin:'http://www.gitbase.com/api/login',
        refresh:'http://www.gitbase.com/api/refresh',
        userInfo:'http://www.gitbase.com/api/current-user',
        userList:'http://www.gitbase.com/api/user',
        addUser:'http://www.gitbase.com/api/register',
        deleteUser:'http://www.gitbase.com/api/user/delete',
        notes:'http://www.gitbase.com/api/user/notes',
        addNote:'http://www.gitbase.com/api/user/addnote',
        updateNote:'http://www.gitbase.com/api/user/note/update',
        deleteNote:'http://www.gitbase.com/api/user/note/delete',
        fileUpload:'http://www.gitbase.com/api/file/upload',
        userImgs:'http://www.gitbase.com/api/user/imgs',
        userVideos:'http://www.gitbase.com/api/user/videos',
        deleteFiles:'http://www.gitbase.com/api/user/files/delete'
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
