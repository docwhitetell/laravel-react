
module.exports = {
    name: 'Laravel React',
    CORS: [],
    openPages: ['/login'],
    api: {
        userLogin:'http://您得laravel项目地址/api/login',
        userInfo:'http://您得laravel项目地址/api/current-user',
        userList:'http://您得laravel项目地址/api/user',
        addUser:'http://您得laravel项目地址/register',
    },
    mockApi:{
        news:'http://localhost:8000/mock/news'
    }
}
