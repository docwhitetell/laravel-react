webpackJsonp([18],{827:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(91),o=n(i),r=a(15),l=n(r),d=a(9),s=n(d),u=a(10),c=n(u),f=a(11),p=n(f),m=a(12),g=n(m),h=a(4),b=n(h);a(125);var v=a(1),k=n(v),w=a(93),x=a(43),y=a(5),E=(n(y),a(128)),S=a(340),N=(n(S),function(e){var t,a,n,i,o;return{content:{padding:"0 0 60px 0"},poster:{height:"calc(100vw / 2 )",backgroundSize:"100%",backgroundPosition:"center center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},blogsTitle:(t={fontSize:48,color:"#ffffff",position:"relative",zIndex:200,padding:"0 40px"},(0,b.default)(t,e.breakpoints.down("md"),{fontSize:38}),(0,b.default)(t,e.breakpoints.down("sm"),{fontSize:30}),(0,b.default)(t,e.breakpoints.down("xs"),{fontSize:20}),t),posterMask:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},mainArticle:(a={width:"90%",maxWidth:800,margin:"0 auto",minHeight:600,backgroundColor:"#ffffff",borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:40,padding:"20px 40px",position:"relative"},(0,b.default)(a,e.breakpoints.down("sm"),{padding:"20px 10px"}),(0,b.default)(a,e.breakpoints.down("xs"),{padding:"20px 10px"}),a),articleHead:(0,b.default)({position:"relative",marginBottom:30},e.breakpoints.down("sm"),{marginBottom:100}),mainTitle:(n={fontSize:36},(0,b.default)(n,e.breakpoints.down("md"),{fontSize:28,paddingRight:"40px"}),(0,b.default)(n,e.breakpoints.down("sm"),{fontSize:24,paddingRight:0}),n),authorAvatar:(i={position:"absolute",borderRadius:"50%",width:100},(0,b.default)(i,e.breakpoints.up("sm"),{right:-60,top:-40}),(0,b.default)(i,e.breakpoints.down("sm"),{width:80,left:"50%",bottom:-90,transform:"translate(-50%,0)"}),i),link:(0,b.default)({float:"right",marginRight:60},e.breakpoints.down("sm"),{marginRight:10}),articlebody:(o={margin:"0 auto"},(0,b.default)(o,e.breakpoints.down("md"),{marginLeft:0}),(0,b.default)(o,"& iframe",{display:"block",margin:"10px auto",width:"100% !important",height:"337px !important","& video":{}}),(0,b.default)(o,"& p",{minHeight:22,lineHeight:1.7}),o),articleShareIcon:{marginRight:10,fontSize:18,color:"rgba(0,0,0,0.4)","&:hover":{color:"#2196F3"}},floatPart:{position:"fixed",top:20},floatPartInner:{position:"relative",margin:"0 auto"}}}),z=function(e){function t(e){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e))}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"app/update",payload:{pageloading:!1}})}},{key:"render",value:function(){var e=this.props,t=e.blogs,a=e.classes;return k.default.createElement("div",null,t.current&&k.default.createElement("div",{className:a.content},k.default.createElement("div",{className:a.poster,style:{backgroundImage:"url("+t.current.poster+")"}},k.default.createElement("div",{className:a.blogsTitle},t.current.title),k.default.createElement("div",{className:a.posterMask})),k.default.createElement("div",{className:a.mainArticle},k.default.createElement("div",{className:a.articleHead},k.default.createElement("h1",{className:a.mainTitle},t.current.title," "),k.default.createElement("p",{style:{fontSize:14,color:"rgba(0,0,0,0.4)"}},t.current.created_at,k.default.createElement(E.Link,{to:"/blogs",className:a.link},k.default.createElement(o.default,{type:"share-alt",className:a.articleShareIcon}),k.default.createElement(o.default,{type:"github",className:a.articleShareIcon}))),k.default.createElement("img",{src:"/assets/blogs/authorimg.jpg",className:a.authorAvatar,alt:""})),k.default.createElement("div",{className:a.articlebody,dangerouslySetInnerHTML:{__html:t.current.content}}),k.default.createElement("div",{className:a.floatPart},k.default.createElement("div",{className:a.floatPartInner})))))}}]),t}(k.default.Component);t.default=(0,w.connect)(function(e){return{blogs:e.blogs}})((0,x.withStyles)(N)(z)),e.exports=t.default}});