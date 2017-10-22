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
let userdata=Mock.mock({
    'inner_pie|7':[{
        name:'@last',
        value:'@integer(300,600)'
    }],
    'outer_pie|7':[
        {
            name:'@first',
            value:'@integer(100,200)'
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
module.exports={
    [`GET /mock/dashboard`](req,res){
        res.status(200).json({
            nd:negative_data.dashboard,
            pd:positive_data.dashboard,
            ud:userdata,
            bd:banner.data
        })
    }
}