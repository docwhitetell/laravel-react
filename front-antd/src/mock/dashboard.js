const qs = require('qs')
const Mock = require('mockjs')

let negative_data=Mock.mock({
    'dashboard|7':[{
       name:'@last',
        uv:'@integer(-5000,5000)',
        pv:'@integer(-5000,5000)',
        amt:'@integer(2000,3000)'
    }]
})
let positive_data=Mock.mock({
    'dashboard|7':[{
        name:'@last',
        uv:'@integer(2000,5000)',
        pv:'@integer(2000,5000)',
        amt:'@integer(2000,3000)'
    }]
})
let positive_data2=Mock.mock({
    'dashboard|7':[{
        name:'@last',
        uv:'@integer(1000,8000)',
        pv:'@integer(1000,8000)',
        amt:'@integer(1000,8000)'
    }]
})
let userdata=Mock.mock({
    'inner_pie|7':[{
        name:'@last',
        value:'@integer(300,600)',
        color:'@color'
    }],
    'outer_pie|7':[
        {
            name:'@first',
            value:'@integer(100,200)',
            color:'@color'
        }
    ],
})
let banner=Mock.mock({
    'data|5':[
        {
            link:'/banner/@id',
            poster(){return Mock.Random.image('1920x600', Mock.Random.color(), '#757575', 'png',  Mock.Random.word())}
        }
    ]
})
let NumberCard=[
    {icon:'pay-circle-o',color:'#00E676',number:Mock.Random.integer(2000,5000),title:'Online Review'},
    {icon:'team',color:'#03A9F4',number:Mock.Random.integer(2000,5000),title:'New Customers'},
    {icon:'message',color:'#E91E63',number:Mock.Random.integer(2000,5000),title:'Active Projects'},
    {icon:'shopping-cart',color:'#7E57C2',number:Mock.Random.integer(2000,5000),title:'Referrals'},
]
let searchData = Mock.mock({
    'data|80-100': [
        {
            word: '@word',
            userNumber: '@integer(100,2000)',
            rose: '@integer(-10,20)',
        },
    ],
})


searchData.data.map((item,index)=>{item.id=index+1;index++})
let database=searchData.data
module.exports={
    [`GET /mock/dashboard`](req,res){
        res.status(200).json({
            nd:negative_data.dashboard,
            pd:positive_data.dashboard,
            ud:userdata,
            bd:positive_data2.dashboard,
            numberCard:NumberCard,
            search:database.slice(0, 10),
            pagination:{current:1,pageSize:5,total:database.length}
        })
    },
    [`GET /mock/search-word`] (req, res) {
        const { query } = req
        let { pageSize, page} = query
        pageSize = pageSize || 5
        page = page || 1

        let newData = database

        res.status(200).json({
            data: newData.slice((page - 1) * pageSize, page * pageSize),
            total: newData.length,
        })
    },
}