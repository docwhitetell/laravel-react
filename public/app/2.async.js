webpackJsonp([2],{212:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=r(n),u=a(343),s=r(u),o=a(100),p=r(o);a(345);var d=a(95),i=(r(d),a(131),a(97)),f=(r(i),a(98)),c=r(f),g=a(347),y=a(134),m=r(y);s.default.config({top:100}),t.default={namespace:"files",state:{filesList:[],videoList:[],open:m.default.get("open")?m.default.get("open"):[],alert:m.default.get("alert")?m.default.get("alert"):[],tabs:0,filesPagination:{current:1,pageSize:10,total:null}},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){var a=e.pathname;"/admin/files-lists"===a?(t({type:"app/update",payload:{pageHeader:"Files Lists"}}),t({type:"query",payload:{pageSize:10}})):"/admin/multi-upload"===a?t({type:"app/update",payload:{pageHeader:"Multi-files drag & auto upload"}}):"/admin/my-files"===a&&t({type:"app/update",payload:{pageHeader:"My Files"}})})}},effects:{query:p.default.mark(function e(t,a){var r,n,l,u,s=t.payload,o=a.call,d=a.put;a.select;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=s,e.next=3,o(g.request,{url:c.default.api.userImgs,withtoken:!0,params:r});case 3:if(n=e.sent,200!==n.status){e.next=11;break}return l=[],u=[],n.data.data.map(function(e,t){l[t]=!1,u[t]=!1}),m.default.set("open",l),m.default.set("alert",u),e.next=11,d({type:"update",payload:{filesList:n.data.data,open:l,alert:u,filesPagination:{current:n.data.current_page,pageSize:parseInt(n.data.per_page),total:n.data.total}}});case 11:case"end":return e.stop()}},e,this)}),queryVideos:p.default.mark(function e(t,a){var r,n,l,u=(t.payload,a.call),s=a.put;a.select;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(g.request,{url:c.default.api.userVideos,withtoken:!0});case 2:if(r=e.sent,200!==r.status){e.next=10;break}return n=[],l=[],r.data.map(function(e,t){n[t]=!1,l[t]=!1}),m.default.set("open",n),m.default.set("alert",l),e.next=10,s({type:"update",payload:{filesList:r.data,open:n,alert:l,filesPagination:{current:r.data.current_page,pageSize:parseInt(r.data.per_page),total:r.data.total}}});case 10:case"end":return e.stop()}},e,this)}),delete:p.default.mark(function e(t,a){var r,n,l=t.payload,u=a.call,o=a.put;a.select;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"alertClose"});case 2:return r={id:l},e.next=5,u(g.request,{url:c.default.api.deleteFiles,withtoken:!0,params:r});case 5:if(n=e.sent,console.log(n),!n.data.success){e.next=13;break}return console.log("delete success"),e.next=11,o({type:"query"});case 11:e.next=14;break;case 13:n.data.error&&(console.log(n.data.error),s.default.error(""+n.data.error));case 14:case"end":return e.stop()}},e,this)})},reducers:{update:function(e,t){return(0,l.default)({},e,t.payload)},dialogOpen:function(e,t){var a=e.open;return a.map(function(e,t){!1}),a[t.payload]=!0,(0,l.default)({},e,{open:a})},dialogClose:function(e,t){var a=e.open;return a[t.payload]=!1,(0,l.default)({},e,{open:a})},alertOpen:function(e,t){var a=e.alert;return a.map(function(e,t){!1}),a[t.payload]=!0,console.log(a),(0,l.default)({},e,{alert:a})},alertClose:function(e,t){for(var a=e.alert,r=[],n=0;n<a.length;n++)r[n]=!1;return console.log(r),(0,l.default)({},e,{alert:r})}}},e.exports=t.default}});