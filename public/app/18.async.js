webpackJsonp([18],{832:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(93),o=n(i),r=a(15),l=n(r),d=a(7),s=n(d),c=a(10),u=n(c),f=a(8),p=n(f),m=a(9),g=n(m),b=a(4),h=n(b);a(126);var v=a(0),k=n(v),y=a(95),w=a(43),x=a(129),E=function(e){var t,a,n,i,o;return{content:{padding:"0 0 60px 0"},poster:{height:"calc(100vw / 2 )",backgroundSize:"100%",backgroundPosition:"center center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},blogsTitle:(t={fontSize:48,color:"#ffffff",position:"relative",zIndex:200,padding:"0 40px"},(0,h.default)(t,e.breakpoints.down("md"),{fontSize:38}),(0,h.default)(t,e.breakpoints.down("sm"),{fontSize:30}),(0,h.default)(t,e.breakpoints.down("xs"),{fontSize:20}),t),posterMask:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},mainArticle:(a={width:"90%",maxWidth:800,margin:"0 auto",minHeight:600,backgroundColor:"#ffffff",borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:40,padding:"20px 40px",position:"relative"},(0,h.default)(a,e.breakpoints.down("sm"),{padding:"20px 10px"}),(0,h.default)(a,e.breakpoints.down("xs"),{padding:"20px 10px"}),a),articleHead:(0,h.default)({position:"relative",marginBottom:30},e.breakpoints.down("sm"),{marginBottom:100}),mainTitle:(n={fontSize:36},(0,h.default)(n,e.breakpoints.down("md"),{fontSize:28,paddingRight:"40px"}),(0,h.default)(n,e.breakpoints.down("sm"),{fontSize:24,paddingRight:0}),n),authorAvatar:(i={position:"absolute",borderRadius:"50%",width:100},(0,h.default)(i,e.breakpoints.up("sm"),{right:-60,top:-40}),(0,h.default)(i,e.breakpoints.down("sm"),{width:80,left:"50%",bottom:-90,transform:"translate(-50%,0)"}),i),link:(0,h.default)({float:"right",marginRight:60},e.breakpoints.down("sm"),{marginRight:10}),articlebody:(o={margin:"0 auto"},(0,h.default)(o,e.breakpoints.down("md"),{marginLeft:0}),(0,h.default)(o,"& iframe",{display:"block",margin:"10px auto",width:"100% !important",height:"337px !important","& video":{}}),(0,h.default)(o,"& p",{minHeight:22,lineHeight:1.7}),(0,h.default)(o,"& img",{maxWidth:"100%"}),(0,h.default)(o,"whiteSpace","pre"),o),articleShareIcon:{marginRight:10,fontSize:18,color:"rgba(0,0,0,0.4)","&:hover":{color:"#2196F3"}},floatPart:{position:"fixed",top:20},floatPartInner:{position:"relative",margin:"0 auto"}}},N=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.blogs;(0,e.dispatch)({type:"app/update",payload:{pageloading:!1}}),console.log(t.current.content)}},{key:"componentDidUpdate",value:function(){for(var e=document.getElementById("articlebody").getElementsByTagName("span"),t=0;t<e.length;t+=1)e.item(t).innerHTML=e.item(t).innerHTML.replace(/ /g,"&nbsp;"),console.log(e.item(t).innerHTML);var a=this.props,n=a.blogs;a.dispatch;document.getElementById("articlebody").innerHTML=n.current.content}},{key:"render",value:function(){var e=this.props,t=e.blogs,a=e.classes;return k.default.createElement("div",null,t.current&&k.default.createElement("div",{className:a.content},k.default.createElement("div",{className:a.poster,style:{backgroundImage:"url("+t.current.poster+")"}},k.default.createElement("div",{className:a.blogsTitle},t.current.title),k.default.createElement("div",{className:a.posterMask})),k.default.createElement("div",{className:a.mainArticle},k.default.createElement("div",{className:a.articleHead},k.default.createElement("h1",{className:a.mainTitle},t.current.title," "),k.default.createElement("p",{style:{fontSize:14,color:"rgba(0,0,0,0.4)"}},t.current.created_at,k.default.createElement(x.Link,{to:"/blogs",className:a.link},k.default.createElement(o.default,{type:"share-alt",className:a.articleShareIcon}),k.default.createElement(o.default,{type:"github",className:a.articleShareIcon}))),k.default.createElement("img",{src:"/assets/blogs/authorimg.jpg",className:a.authorAvatar,alt:""})),k.default.createElement("div",{id:"articlebody",className:a.articlebody}),k.default.createElement("div",{className:a.floatPart},k.default.createElement("div",{className:a.floatPartInner})))))}}]),t}(k.default.Component);t.default=(0,y.connect)(function(e){return{blogs:e.blogs}})((0,w.withStyles)(E)(N)),e.exports=t.default}});