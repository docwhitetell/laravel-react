webpackJsonp([17],{825:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(91),r=l(o),i=a(16),s=l(i),n=a(9),d=l(n),c=a(10),f=l(c),u=a(11),m=l(u),g=a(12),h=l(g);a(126);var p=a(1),b=l(p),E=a(93),v=a(46),N=a(5),y=l(N),I=a(129),k=a(340),L=l(k),w=a(371),x=l(w),R=a(372),B=l(R),P=function(e){return{root:{height:"auto",overflow:"hidden",backgroundColor:"rgb(30,36,58)"},content:{minHeight:"100vh"},headerbg:{position:"absolute",top:0,height:"100%",width:"100%",zIndex:1},bgimg:{position:"absolute",height:"100%",width:"100%",backgroundImage:"url('/assets/blogs/headbg.png')",backgroundSize:"100%",backgroundPosition:"left bottom",transform:"rotate(180deg)",backgroundRepeat:"no-repeat",zIndex:1},bgcolor:{height:"100%"},blogsListcontent:{minHeight:"100%",paddingTop:160,zIndex:200,position:"relative",marginBottom:40},author:{width:"100%",padding:"0 100px",height:300,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center"},authorimg:{paddingRight:80},authorInfo:{},authorName:{color:"#ffffff",fontSize:42,marginBottom:30},authorPersonalInfo:{fontSize:18,marginBottom:10,color:"#ffffff"},authordesc:{color:"rgba(255,255,255,0.6)",marginBottom:10},sourceCode:{color:"#ffffff"},listsWrapper:{maxWidth:1e3,width:"90%",margin:"0 auto"},lists:{marginTop:80,height:"auto",borderRadius:10},itemWrapper:{height:160,marginBottom:20},blogsItem:{position:"relative",width:"80%",height:160,display:"flex",alignItems:"center"},floatLeft:{float:"left"},floatRight:{float:"right"},listsBg:{position:"absolute",height:"100%",width:"100%",filter:"blur(2px)",borderRadius:10,backgroundSize:"cover"},listsBgLeft:{background:"#ffffff"},listsBgRight:{background:"#ffffff"},blogPoster:{width:200,height:140,position:"absolute",zIndex:10},PosterRight:{right:20},PosterLeft:{left:20},blogInfo:{width:"calc(100% - 280px)",position:"absolute"},blogInfoRight:{right:20},blogInfoLeft:{left:20},blogTitle:{fontSize:28,fontWeight:700,color:"rgba(0,0,0,0.72)"},blogUploadTime:{textAlign:"right",fontWeight:900,color:"rgba(0,0,0,0.6)"},shareIcon:{fontSize:14,marginRight:10,color:"rgba(0,0,0,0.6)","&:hover":{color:"#2196F3"}},blogDescription:{textOverflow:"ellipsis",display:"-webkit-box",webkitLineClamp:3,webkitBoxOrient:"vertical",overflow:"hidden",height:54},loadmore:{position:"relative",textAlign:"center"}}},z=function(e){function t(e){return(0,d.default)(this,t),(0,m.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e))}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"blogs/getFrontBlogs"})}},{key:"render",value:function(){var e=this.props,t=(e.app,e.blogs),a=e.classes;e.dispatch;return b.default.createElement("div",{className:a.root},b.default.createElement(x.default,null),b.default.createElement("div",{className:a.content},b.default.createElement("div",{className:a.headerbg},b.default.createElement("div",{className:a.bgimg}),b.default.createElement("div",{className:a.bgcolor})),b.default.createElement("div",{className:a.blogsListcontent},b.default.createElement("div",{className:a.author},b.default.createElement("div",{className:a.authorimg},b.default.createElement("img",{src:"/assets/blogs/authorimg.jpg",style:{width:120,height:120,borderRadius:"50%"},alt:""})),b.default.createElement("div",{className:a.authorInfo},b.default.createElement("h1",{className:a.authorName},"Doctor White"),b.default.createElement("p",{className:a.authorPersonalInfo}," Feb 2, 1994 \xa0\xa0\xa0\xa0  ",b.default.createElement("a",{href:""},b.default.createElement(r.default,{type:"star"}),"510559413@qq.com")),b.default.createElement("p",{className:a.authordesc},"Proficient in PHP, Mysql , Linux , JavaScript , React all stack engineers"),b.default.createElement("p",{className:a.sourceCode},"Source Code\xa0\xa0\xa0\xa0 ",b.default.createElement("a",{href:"https://github.com/docwhitetell/laravel-react",target:"_blank"},b.default.createElement(r.default,{type:"github",style:{fontSize:18}}))))),b.default.createElement("div",{className:a.listsWrapper},b.default.createElement("h3",{style:{textAlign:"right",color:"#ffffff"}},"Original Tech-Articals"),b.default.createElement("h5",{style:{textAlign:"right",color:"rgba(255,255,255,0.6)"}},"Include Php , Mysql , Linux , JavaScript , React...Something that might be of interest to you"),b.default.createElement("div",{className:a.lists},t.frontBlogsLists.map(function(e,t){return t%2==0?b.default.createElement("div",{className:a.itemWrapper,key:t},b.default.createElement("div",{className:(0,y.default)(a.blogsItem,a.floatLeft)},b.default.createElement("div",{className:(0,y.default)(a.listsBg,a.listsBgLeft)}),b.default.createElement("div",{className:(0,y.default)(a.blogPoster,a.PosterLeft)},b.default.createElement(I.Link,{to:"/blogs/"+e.id},b.default.createElement("img",{src:e.poster,style:{width:"100%",height:"100%",borderRadius:8},alt:""}))),b.default.createElement("div",{className:(0,y.default)(a.blogInfo,a.blogInfoRight)},b.default.createElement(I.Link,{to:"/blogs/"+e.id},b.default.createElement("p",{className:a.blogTitle},e.title)),b.default.createElement("p",{className:a.blogDescription},e.description),b.default.createElement("p",{className:a.blogUploadTime},b.default.createElement(I.Link,{to:"/blogs"},b.default.createElement(r.default,{type:"heart",className:a.shareIcon})),b.default.createElement(I.Link,{to:"/blogs"},b.default.createElement(r.default,{type:"star",className:a.shareIcon})),b.default.createElement(I.Link,{to:"/blogs"},b.default.createElement(r.default,{type:"share-alt",className:a.shareIcon})),e.created_at)))):b.default.createElement("div",{className:a.itemWrapper,key:t},b.default.createElement("div",{className:(0,y.default)(a.blogsItem,a.floatRight)},b.default.createElement("div",{className:(0,y.default)(a.listsBg,a.listsBgRight)}),b.default.createElement("div",{className:(0,y.default)(a.blogPoster,a.PosterRight)},b.default.createElement(I.Link,{to:"/blogs/"+e.id,className:(0,y.default)(a.floatRight)},b.default.createElement("img",{src:e.poster,style:{width:"100%",height:"100%",borderRadius:8},alt:""}))),b.default.createElement("div",{className:(0,y.default)(a.blogInfo,a.blogInfoLeft)},b.default.createElement(I.Link,{to:"/blogs/"+e.id},b.default.createElement("p",{className:a.blogTitle},e.title)),b.default.createElement("p",{className:a.blogDescription},e.description),b.default.createElement("p",{className:a.blogUploadTime},b.default.createElement(I.Link,{to:"/blogs"},b.default.createElement(r.default,{type:"heart",className:a.shareIcon})),b.default.createElement(I.Link,{to:"/blogs"},b.default.createElement(r.default,{type:"star",className:a.shareIcon})),b.default.createElement(I.Link,{to:"/blogs"},b.default.createElement(r.default,{type:"share-alt",className:a.shareIcon})),e.created_at))))})),b.default.createElement("div",{className:a.loadmore},b.default.createElement(L.default,{style:{background:"linear-gradient(127deg,#0277BD ,#84FFFF,#18FFFF)",color:"rgba(0,0,0,0.6)",fontSize:12,fontWeight:700}},"Load More \xa0\xa0",b.default.createElement(r.default,{type:"retweet",style:{color:"rgba(0,0,0,0.5)"}})))))),b.default.createElement(B.default,null))}}]),t}(b.default.Component);t.default=(0,E.connect)(function(e){return{app:e.app,blogs:e.blogs}})((0,v.withStyles)(P)(z)),e.exports=t.default}});