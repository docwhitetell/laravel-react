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
    content:{
        //backgroundColor:'rgb(30,36,58)',
        backgroundColor:'#f7f7f7',
        padding:'0 0 60px 0'
    },
    poster:{
        height:'calc(100vw / 2 )',
        backgroundSize:'100%',
        backgroundPosition:'center center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    blogsTitle:{
        fontSize:48,
        color:'#ffffff',
        position:'relative',
        zIndex:200,
        padding:'0 40px',
        textShadow:'3px 2px 2px #FFFFFF',
        [theme.breakpoints.down('md')]: {
            fontSize:38,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:36,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:32,
        },
    },
    posterMask:{
        position:'absolute',
        top:0,left:0,
        width:'100%',height:"100%",
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    mainArticle:{
        width:'90%',
        maxWidth:800,
        margin:'0 auto',
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginTop:40,
        padding:'20px 40px',
        boxShadow:'0 4px 10px rgba(0,0,0,0.1),4px 0px 10px rgba(0,0,0,0.1)',
        [theme.breakpoints.down('xs')]: {
            padding:'20px 10px',
        },
    },
    articleHead:{
        position:'relative',
        marginBottom:30
    },
    mainTitle:{
        fontSize:36,
        //color:'#01579B'
    },
    articlebody:{
        marginLeft:40,
        [theme.breakpoints.down('md')]: {
            marginLeft:0,
        },
        '& iframe':{
            display:'block',
            margin:'10px auto',
            width:'100% !important',
            height:'337px !important',
            '& video':{

            }
        },
        '& p':{
            textIndent:'2rem'
        }
    },
    articleShareIcon:{
        marginRight:10,
        fontSize:18,
        color:'rgba(0,0,0,0.4)',
        '&:hover':{
            color:'#2196F3'
        }
    }
})
const Detail=({blogs,classes})=>{
    return (
        <div>
            <Nav/>
            {blogs.current &&
            <div className={classes.content}>
                <div className={classes.poster} style={{backgroundImage:`url(${blogs.current.poster})`}}>
                    <div className={classes.blogsTitle}>
                        {blogs.current.title}
                    </div>
                    <div className={classes.posterMask}></div>
                </div>

                <div className={classes.mainArticle}>
                    <div className={classes.articleHead}>
                        <h1 className={classes.mainTitle}>{blogs.current.title} </h1>
                        <p style={{fontSize: 14,color:'rgba(0,0,0,0.4)'}}>{blogs.current.created_at}
                            <Link to="/blogs" style={{float: 'right', marginRight: 100}}>
                                <Icon type="share-alt" className={classes.articleShareIcon}/>
                                <Icon type="github" className={classes.articleShareIcon}/>
                            </Link>
                        </p>
                        <img src="/assets/blogs/authorimg.jpg" style={{position:'absolute',right:-60,top:-40,borderRadius:'50%'}} width={100} alt=""/>
                    </div>
                    <div className={classes.articlebody} dangerouslySetInnerHTML={{__html:blogs.current.content }}></div>
                </div>
            </div>
            }

            <Footer/>
        </div>

    )
}


export default connect(({blogs})=>({blogs}))(withStyles(styles)(Detail))