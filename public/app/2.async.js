webpackJsonp([2],{209:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=r(n),u=a(96),s=r(u),o=a(339),p=r(o);a(340);var d=a(122),i=(r(d),a(125),a(92)),f=(r(i),a(93)),c=r(f),g=a(343),y=a(126),v=r(y);p.default.config({top:100}),t.default={namespace:"files",state:{filesList:[],videoList:[],open:v.default.get("open")?v.default.get("open"):[],alert:v.default.get("alert")?v.default.get("alert"):[],tabs:0,filesPagination:{current:1,pageSize:10,total:null}},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){var a=e.pathname;"/files-lists"===a?(t({type:"app/update",payload:{pageHeader:"Files Lists"}}),t({type:"query"})):"/multi-upload"===a?t({type:"app/update",payload:{pageHeader:"Multi-files drag & auto upload"}}):"/my-files"===a&&t({type:"app/update",payload:{pageHeader:"My Files"}})})}},effects:{query:s.default.mark(function e(t,a){var r,n,l,u,o=t.payload,p=a.call,d=a.put;a.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=o,e.next=3,p(g.request,{url:c.default.api.userImgs,withtoken:!0,params:r});case 3:if(n=e.sent,200!==n.status){e.next=11;break}return l=[],u=[],r?n.data.data.map(function(e,t){l[t]=!1,u[t]=!1}):n.data.map(function(e,t){l[t]=!1,u[t]=!1}),v.default.set("open",l),v.default.set("alert",u),e.next=11,d({type:"update",payload:{filesList:n.data,open:l,alert:u,filesPagination:{current:n.data.current_page,pageSize:parseInt(n.data.per_page),total:n.data.total}}});case 11:case"end":return e.stop()}},e,this)}),queryVideos:s.default.mark(function e(t,a){var r,n,l,u=(t.payload,a.call),o=a.put;a.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(g.request,{url:c.default.api.userVideos,withtoken:!0});case 2:if(r=e.sent,200!==r.status){e.next=10;break}return n=[],l=[],r.data.map(function(e,t){n[t]=!1,l[t]=!1}),v.default.set("open",n),v.default.set("alert",l),e.next=10,o({type:"update",payload:{filesList:r.data,open:n,alert:l,filesPagination:{current:r.data.current_page,pageSize:parseInt(r.data.per_page),total:r.data.total}}});case 10:case"end":return e.stop()}},e,this)}),delete:s.default.mark(function e(t,a){var r,n,l=t.payload,u=a.call,o=a.put;a.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"alertClose"});case 2:return r={id:l},e.next=5,u(g.request,{url:c.default.api.deleteFiles,withtoken:!0,params:r});case 5:if(n=e.sent,console.log(n),!n.data.success){e.next=13;break}return console.log("delete success"),e.next=11,o({type:"query"});case 11:e.next=14;break;case 13:n.data.error&&(console.log(n.data.error),p.default.error(""+n.data.error));case 14:case"end":return e.stop()}},e,this)})},reducers:{update:function(e,t){return(0,l.default)({},e,t.payload)},dialogOpen:function(e,t){var a=e.open;return a.map(function(e,t){!1}),a[t.payload]=!0,(0,l.default)({},e,{open:a})},dialogClose:function(e,t){var a=e.open;return a[t.payload]=!1,(0,l.default)({},e,{open:a})},alertOpen:function(e,t){var a=e.alert;return a.map(function(e,t){!1}),a[t.payload]=!0,console.log(a),(0,l.default)({},e,{alert:a})},alertClose:function(e,t){for(var a=e.alert,r=[],n=0;n<a.length;n++)r[n]=!1;return console.log(r),(0,l.default)({},e,{alert:r})}}},e.exports=t.default}});