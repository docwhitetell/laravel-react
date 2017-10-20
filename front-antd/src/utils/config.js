
module.exports = {
    name: 'Laravel React',
    CORS: [],
    openPages: ['/login'],
    api: {
        userLogin:'http://mylaravel.com/api/login',
        userInfo:'http://mylaravel.com/api/current-user',
        userList:'http://mylaravel.com/api/user',
        addUser:'http://mylaravel.com/api/register',
    },
    mockApi:{
        news:'http://localhost:8000/mock/news'
    }
}
