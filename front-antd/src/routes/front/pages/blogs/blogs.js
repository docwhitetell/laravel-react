import React from 'react'
import {connect} from 'dva'
import {withStyles} from 'material-ui/styles'
import classnames from 'classnames'
import {Link} from 'dva/router'
import {Icon} from 'antd'
import Button from 'material-ui/Button'
import Nav from '../../components/header'
import Footer from '../../components/footer'
const styles=theme=>({
    root:{
        height:'auto',
        overflow:'hidden',
        backgroundColor:'rgb(30,36,58)'
    },
    content:{
        minHeight:'100vh',
    },
    headerbg:{
        position:'absolute',top:0,height:'100%',width:'100%',zIndex:1
    },
    bgimg:{
        position:'absolute',
        height:'100%',width:'100%',
        backgroundImage:"url('/assets/blogs/headbg.png')",
        backgroundSize:"100%",
        backgroundPosition:'left bottom',
        transform:'rotate(180deg)',
        backgroundRepeat:"no-repeat",
        zIndex:1
    },
    bgcolor:{
        height:"100%",
        /*backgroundColor:'rgb(30,36,58)'*/
    },
    blogsListcontent:{
        minHeight:'100%',
        paddingTop:160,
        zIndex:200,
        position:'relative',
        marginBottom:40
    },
    author:{
        width:'100%',
        padding:"0 100px",
        height:300,
        zIndex:200,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    authorimg:{paddingRight:80},
    authorInfo:{

    },
    authorName:{
        color:'#ffffff',
        fontSize:42,
        marginBottom:30
    },
    authorPersonalInfo:{
        fontSize:18,
        marginBottom:10,
        color:'#ffffff',
    },
    authordesc:{
        color:'rgba(255,255,255,0.6)',
        marginBottom:10
    },
    sourceCode:{
        color:"#ffffff"
    },
    listsWrapper:{
        maxWidth:1000,
        width:'90%',
        margin:'0 auto'
    },
    lists:{
        marginTop:80,
        height:'auto',
        borderRadius:10,
       /* boxShadow:'0px 6px 17px rgba(255,255,255,0.6),4px 0px 17px rgba(255,255,255,0.6)',*/

    },
    itemWrapper:{
        height:160,
        marginBottom:20,
    },
    blogsItem:{
        position:'relative',
        width:"80%",
        height:160,
        display:'flex',
        alignItems:'center',
    },
    floatLeft:{float:"left",},
    floatRight:{
        float:"right",
    },
    listsBg:{
        position:'absolute',
        height:'100%',
        width:'100%',
        filter:"blur(2px)",
        borderRadius:10,
        backgroundSize:"cover"
    },
    listsBgLeft:{
        //background:"linear-gradient(127deg, #18FFFF,#84FFFF,#0277BD)",
        background:'#ffffff'
    },
    listsBgRight:{
        //background:"linear-gradient(127deg,#0277BD ,#84FFFF,#18FFFF)",
        background:'#ffffff'
    },
    blogPoster:{
        width:200,height:140,
        position:'absolute',
        zIndex:10
    },
    PosterRight:{
        right:20
    },
    PosterLeft:{
        left:20
    },
    blogInfo:{
        width:'calc(100% - 280px)',
        position:'absolute',
    },
    blogInfoRight:{
        right:20
    },
    blogInfoLeft:{
        left:20
    },
    blogTitle:{
        fontSize:28,
        fontWeight:700,
        //color:'rgba(0,0,0,0.8)',
        color:'rgba(0,0,0,0.72)'
    },
    blogUploadTime:{
        textAlign:'right',
        fontWeight:900,
        color:'rgba(0,0,0,0.6)'
    },
    shareIcon:{
        fontSize:14,
        marginRight:10,
        color:'rgba(0,0,0,0.6)',
        '&:hover':{
            color:'#2196F3'
        }
    },
    blogDescription:{
        textOverflow:'ellipsis',
        display:'-webkit-box',
        webkitLineClamp:3,
        webkitBoxOrient:'vertical',
        overflow:'hidden',
        /*whiteSpace:'nowrap',*/
        height:54
    },
    loadmore:{
        position:'relative',
        textAlign:'center'
    },

})
class Blogs extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {dispatch}=this.props
        dispatch({
            type:"blogs/getFrontBlogs"
        })
    }

    render(){
        const {app,blogs,classes,dispatch}=this.props
        return(
            <div className={classes.root}>
                <Nav/>
                <div className={classes.content}>
                    <div className={classes.headerbg}>
                        <div className={classes.bgimg}></div>
                        <div className={classes.bgcolor}></div>
                    </div>
                    <div className={classes.blogsListcontent}>
                        <div className={classes.author}>
                            <div className={classes.authorimg}>
                                <img src="/assets/blogs/authorimg.jpg" style={{width:120,height:120,borderRadius:'50%'}}  alt=""/>
                            </div>
                            <div className={classes.authorInfo}>
                                <h1 className={classes.authorName}>Doctor White</h1>
                                <p className={classes.authorPersonalInfo}> Feb 2, 1994 &nbsp;&nbsp;&nbsp;&nbsp;  <a href=""><Icon type="star"/>510559413@qq.com</a></p>
                                <p className={classes.authordesc}>Proficient in PHP, Mysql , Linux , JavaScript , React all stack engineers</p>
                                <p className={classes.sourceCode}>Source Code&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/docwhitetell/laravel-react" target="_blank"><Icon type="github" style={{fontSize:18}}/></a></p>
                            </div>
                        </div>
                        <div className={classes.listsWrapper}>
                            <h3 style={{textAlign:'right',color:'#ffffff'}}>Original Tech-Articals</h3>
                            <h5 style={{textAlign:'right',color:'rgba(255,255,255,0.6)'}}>Include Php , Mysql , Linux , JavaScript , React...Something that might be of interest to you</h5>
                            <div className={classes.lists}>
                                {blogs.frontBlogsLists.map((item,index)=>{
                                    if(index%2===0){
                                        return(
                                            <div className={classes.itemWrapper} key={index}>
                                                <div
                                                    className={classnames(classes.blogsItem, classes.floatLeft)}>{/* style={{backgroundImage:"url('/assets/index/banner1.png')",}}*/}
                                                    <div className={classnames(classes.listsBg, classes.listsBgLeft)}></div>
                                                    <div className={classnames(classes.blogPoster, classes.PosterLeft)}>
                                                        <Link to={`/blogs/${item.id}`}><img src={item.poster}
                                                                               style={{width: '100%', height: '100%',borderRadius:8}}
                                                                               alt=""/></Link>
                                                    </div>
                                                    <div className={classnames(classes.blogInfo, classes.blogInfoRight)}>
                                                        <Link to={`/blogs/${item.id}`}><p className={classes.blogTitle}>{item.title}</p></Link>
                                                        <p className={classes.blogDescription}>{item.description}</p>
                                                        <p className={classes.blogUploadTime}>
                                                            <Link to="/blogs"><Icon type="heart" className={classes.shareIcon}/></Link>
                                                            <Link to="/blogs"><Icon type="star" className={classes.shareIcon}/></Link>
                                                            <Link to="/blogs"><Icon type="share-alt" className={classes.shareIcon}/></Link>
                                                            {item.created_at}
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }else{
                                        return(
                                            <div className={classes.itemWrapper} key={index}>
                                                <div
                                                    className={classnames(classes.blogsItem, classes.floatRight)}>{/* style={{backgroundImage:"url('/assets/index/banner2.png')",}}*/}
                                                    <div className={classnames(classes.listsBg, classes.listsBgRight)}></div>
                                                    <div className={classnames(classes.blogPoster, classes.PosterRight)}>
                                                        <Link to={`/blogs/${item.id}`} className={classnames(classes.floatRight)}><img
                                                            src={item.poster} style={{width: '100%', height: '100%',borderRadius:8}}
                                                            alt=""/></Link>
                                                    </div>
                                                    <div className={classnames(classes.blogInfo, classes.blogInfoLeft)}>
                                                        <Link to={`/blogs/${item.id}`}><p className={classes.blogTitle}>{item.title}</p></Link>
                                                        <p className={classes.blogDescription}>{item.description}</p>
                                                        <p className={classes.blogUploadTime}>
                                                            <Link to="/blogs"><Icon type="heart" className={classes.shareIcon}/></Link>
                                                            <Link to="/blogs"><Icon type="star" className={classes.shareIcon}/></Link>
                                                            <Link to="/blogs"><Icon type="share-alt" className={classes.shareIcon}/></Link>
                                                            {item.created_at}
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                })}


                            </div>
                            <div className={classes.loadmore}>
                                <Button style={{
                                    background:'linear-gradient(127deg,#0277BD ,#84FFFF,#18FFFF)',
                                    color:'rgba(0,0,0,0.6)',
                                    fontSize:12,
                                    fontWeight:700,}}
                                >
                                    Load More &nbsp;&nbsp;
                                    <Icon type="retweet" style={{color:'rgba(0,0,0,0.5)'}}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default connect(({app,blogs})=>({app,blogs}))(withStyles(styles)(Blogs))