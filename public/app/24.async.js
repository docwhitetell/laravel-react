webpackJsonp([24],{835:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=t(2),s=n(r),o=t(99),u=n(o),l=t(95),d=(n(l),t(129),t(344)),c=t(130),p=n(c);a.default={namespace:"dashboard",state:{numberCard:[],tabs:0,cardMenu:!1,loading:!0,search:[],pagination:{current:1,pageSize:5},sales:[{name:"Household appliances",percent:"28.79%",sales:4544,color:"#F44336"},{name:"Consumption of alcohol",percent:"21.04%",sales:3321,color:"#E91E63"},{name:"Personal health",percent:"19.73%",sales:3113,color:"#3F51B5"},{name:"Clothing bags",percent:"14.83%",sales:2341,color:"#2196F3"},{name:"Maternal and child products",percent:"7.80",sales:1231,color:"#009688"},{name:"Other",percent:"7.80%",sales:1231,color:"#FFEB3B"}],data:[{name:"data.no1",value:1264},{name:"data.no2",value:1864},{name:"data.no3",value:1064},{name:"data.no4",value:2264},{name:"data.no5",value:5264},{name:"data.no6",value:2664},{name:"data.no7",value:3864}]},subscriptions:{setupHistory:function(e){var a=e.dispatch;e.history.listen(function(e){"/admin/dashboard"===e.pathname&&a({type:"app/update",payload:{pageHeader:"Dashboard"}})})}},effects:{getData:u.default.mark(function e(a,t){var n,r=(a.payload,t.put),s=t.call;t.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d.request,{url:p.default.mockApi.dashboard,method:"get"});case 2:if(n=e.sent,n.data.loading=!1,200!==n.status){e.next=7;break}return e.next=7,r({type:"update",payload:n.data});case 7:case"end":return e.stop()}},e,this)}),getTableData:u.default.mark(function e(a,t){var n,r,s,o=a.payload,l=t.put,c=t.call;t.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:o.current,pageSize:o.pageSize},e.next=3,c(d.request,{url:p.default.mockApi.search,params:n,method:"get"});case 3:if(r=e.sent,200!==r.status){e.next=8;break}return s={search:r.data.data,pagination:{current:o.current,pageSize:o.pageSize,totle:r.data.total}},e.next=8,l({type:"update",payload:s});case 8:case"end":return e.stop()}},e,this)})},reducers:{update:function(e,a){return(0,s.default)({},e,a.payload)}}},e.exports=a.default}});