webpackJsonp([18],{827:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(91),r=l(n),o=a(15),i=l(o),d=a(9),s=l(d),u=a(10),c=l(u),f=a(11),p=l(f),m=a(12),g=l(m),b=a(4),h=l(b);a(125);var v=a(1),k=l(v),x=a(93),y=a(43),E=a(5),w=(l(E),a(128)),S=a(339),N=(l(S),a(372)),_=l(N),z=a(373),I=l(z),T=function(e){var t,a,l;return{content:{padding:"0 0 60px 0"},poster:{height:"calc(100vw / 2 )",backgroundSize:"100%",backgroundPosition:"center center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},blogsTitle:(t={fontSize:48,color:"#ffffff",position:"relative",zIndex:200,padding:"0 40px"},(0,h.default)(t,e.breakpoints.down("md"),{fontSize:38}),(0,h.default)(t,e.breakpoints.down("sm"),{fontSize:30}),(0,h.default)(t,e.breakpoints.down("xs"),{fontSize:20}),t),posterMask:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},mainArticle:(a={width:"90%",maxWidth:800,margin:"0 auto",backgroundColor:"#ffffff",borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:40,padding:"20px 40px",position:"relative"},(0,h.default)(a,e.breakpoints.down("sm"),{padding:"20px 10px"}),(0,h.default)(a,e.breakpoints.down("xs"),{padding:"20px 10px"}),a),articleHead:{position:"relative",marginBottom:30},mainTitle:(0,h.default)({fontSize:36},e.breakpoints.down("md"),{fontSize:24,paddingRight:"40px"}),articlebody:(l={margin:"0 auto"},(0,h.default)(l,e.breakpoints.down("md"),{marginLeft:0}),(0,h.default)(l,"& iframe",{display:"block",margin:"10px auto",width:"100% !important",height:"337px !important","& video":{}}),l),articleShareIcon:{marginRight:10,fontSize:18,color:"rgba(0,0,0,0.4)","&:hover":{color:"#2196F3"}},floatPart:{position:"fixed",top:20},floatPartInner:{position:"relative",margin:"0 auto"}}},R=function(e){function t(e){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"app/update",payload:{pageloading:!1}})}},{key:"render",value:function(){var e=this.props,t=e.blogs,a=e.classes;return k.default.createElement("div",null,k.default.createElement(_.default,null),t.current&&k.default.createElement("div",{className:a.content},k.default.createElement("div",{className:a.poster,style:{backgroundImage:"url("+t.current.poster+")"}},k.default.createElement("div",{className:a.blogsTitle},t.current.title),k.default.createElement("div",{className:a.posterMask})),k.default.createElement("div",{className:a.mainArticle},k.default.createElement("div",{className:a.articleHead},k.default.createElement("h1",{className:a.mainTitle},t.current.title," "),k.default.createElement("p",{style:{fontSize:14,color:"rgba(0,0,0,0.4)"}},t.current.created_at,k.default.createElement(w.Link,{to:"/blogs",style:{float:"right",marginRight:100}},k.default.createElement(r.default,{type:"share-alt",className:a.articleShareIcon}),k.default.createElement(r.default,{type:"github",className:a.articleShareIcon}))),k.default.createElement("img",{src:"/assets/blogs/authorimg.jpg",style:{position:"absolute",right:-60,top:-40,borderRadius:"50%"},width:100,alt:""})),k.default.createElement("div",{className:a.articlebody,dangerouslySetInnerHTML:{__html:t.current.content}}),k.default.createElement("div",{className:a.floatPart},k.default.createElement("div",{className:a.floatPartInner})))),k.default.createElement(I.default,null))}}]),t}(k.default.Component);t.default=(0,x.connect)(function(e){return{blogs:e.blogs}})((0,y.withStyles)(T)(R)),e.exports=t.default}});