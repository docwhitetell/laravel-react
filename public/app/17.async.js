webpackJsonp([17],{827:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(91),r=l(n),o=a(15),i=l(o),d=a(9),s=l(d),u=a(10),c=l(u),f=a(11),p=l(f),m=a(12),g=l(m),b=a(4),h=l(b);a(126);var x=a(1),v=l(x),k=a(93),y=a(42),E=a(5),S=(l(E),a(129)),w=a(341),_=(l(w),a(372)),N=l(_),z=a(373),I=l(z),F=function(e){var t,a;return{content:{backgroundColor:"#f7f7f7",padding:"0 0 60px 0"},poster:{height:"calc(100vw / 2 )",backgroundSize:"100%",backgroundPosition:"center center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},blogsTitle:(t={fontSize:48,color:"#ffffff",position:"relative",zIndex:200,padding:"0 40px",textShadow:"3px 2px 2px #FFFFFF"},(0,h.default)(t,e.breakpoints.down("md"),{fontSize:38}),(0,h.default)(t,e.breakpoints.down("sm"),{fontSize:36}),(0,h.default)(t,e.breakpoints.down("xs"),{fontSize:32}),t),posterMask:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},mainArticle:(0,h.default)({width:"90%",maxWidth:800,margin:"0 auto",backgroundColor:"#ffffff",borderRadius:20,marginTop:40,padding:"20px 40px",boxShadow:"0 4px 10px rgba(0,0,0,0.1),4px 0px 10px rgba(0,0,0,0.1)"},e.breakpoints.down("xs"),{padding:"20px 10px"}),articleHead:{position:"relative",marginBottom:30},mainTitle:{fontSize:36},articlebody:(a={marginLeft:40},(0,h.default)(a,e.breakpoints.down("md"),{marginLeft:0}),(0,h.default)(a,"& iframe",{display:"block",margin:"10px auto",width:"100% !important",height:"337px !important","& video":{}}),(0,h.default)(a,"& p",{textIndent:"2rem"}),a),articleShareIcon:{marginRight:10,fontSize:18,color:"rgba(0,0,0,0.4)","&:hover":{color:"#2196F3"}}}},M=function(e){function t(e){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"app/update",payload:{pageloading:!1}})}},{key:"render",value:function(){var e=this.props,t=e.blogs,a=e.classes;return v.default.createElement("div",null,v.default.createElement(N.default,null),t.current&&v.default.createElement("div",{className:a.content},v.default.createElement("div",{className:a.poster,style:{backgroundImage:"url("+t.current.poster+")"}},v.default.createElement("div",{className:a.blogsTitle},t.current.title),v.default.createElement("div",{className:a.posterMask})),v.default.createElement("div",{className:a.mainArticle},v.default.createElement("div",{className:a.articleHead},v.default.createElement("h1",{className:a.mainTitle},t.current.title," "),v.default.createElement("p",{style:{fontSize:14,color:"rgba(0,0,0,0.4)"}},t.current.created_at,v.default.createElement(S.Link,{to:"/blogs",style:{float:"right",marginRight:100}},v.default.createElement(r.default,{type:"share-alt",className:a.articleShareIcon}),v.default.createElement(r.default,{type:"github",className:a.articleShareIcon}))),v.default.createElement("img",{src:"/assets/blogs/authorimg.jpg",style:{position:"absolute",right:-60,top:-40,borderRadius:"50%"},width:100,alt:""})),v.default.createElement("div",{className:a.articlebody,dangerouslySetInnerHTML:{__html:t.current.content}}))),v.default.createElement(I.default,null))}}]),t}(v.default.Component);t.default=(0,k.connect)(function(e){return{blogs:e.blogs}})((0,y.withStyles)(F)(M)),e.exports=t.default}});