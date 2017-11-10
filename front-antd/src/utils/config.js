import Cookies from 'js-cookie'
import store from 'store'
module.exports = {
    name: 'Doc White',
    CORS: [],
    openPages: ['/'],
    leftMenu:[
        {
            name:'Dashboard',
            path:'/dashboard',
            icon:'pie-chart'
        },
        {
            name:'User',
            path:'/user',
            icon:'team'
        },
        {
            name:'News',
            path:'/news',
            icon:'appstore'
        },
        {
            name:"Notes",
            type:'notes',
            icon:'file-text',
            subMenu:true,
            list:[
                {
                    name:'List',
                    path:'/notes',
                    icon:'bars'
                },
                {
                    name:'Add',
                    path:'/note/add',
                    icon:'edit'
                },
            ]
        }

    ],
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
        userFiles:'http://www.gitbase.com/api/user/files',
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
