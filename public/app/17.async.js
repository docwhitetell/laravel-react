webpackJsonp([17],{816:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=a(s),o=r(96),u=a(o),c=r(339),d=a(c);r(340);var p=r(122),l=(a(p),r(125)),f=r(343),i=r(92),k=a(i),h=r(93),x=a(h);d.default.config({top:100}),t.default={namespace:"login",state:{errorMsg:""},subscriptions:{setup:function(e){(0,e.dispatch)({type:"checkLogin"})}},effects:{checkLogin:u.default.mark(function e(t,r){var a=(t.payload,r.put);r.call,r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,k.default)("access_token")){e.next=3;break}return e.next=3,a(l.routerRedux.push("/dashboard"));case 3:case"end":return e.stop()}},e,this)}),login:u.default.mark(function e(t,r){var a,s=t.payload,n=r.put,o=r.call;r.select;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(f.request,{url:x.default.api.userLogin,data:s,method:"post"});case 2:if(a=e.sent,console.log(a),a.response){e.next=21;break}if(!a.data.error){e.next=12;break}return console.log(a.data.error),d.default.error(a.data.error+",Please Check Your Account Again!"),e.next=10,n({type:"updateError",payload:a.data.error});case 10:e.next=19;break;case 12:if(!a.data.success){e.next=19;break}return k.default.set("access_token",a.data.token.access_token,{expires:1/12,path:"/"}),k.default.set("refresh_token",a.data.token.refresh_token,{expires:1/6,path:"/"}),e.next=17,n(l.routerRedux.push("/dashboard"));case 17:return e.next=19,n({type:"app/query"});case 19:e.next=22;break;case 21:d.default.error("Server has no response!");case 22:case"end":return e.stop()}},e,this)})},reducers:{updateError:function(e,t){return(0,n.default)({},e,{errorMsg:t.payload})}}},e.exports=t.default}});