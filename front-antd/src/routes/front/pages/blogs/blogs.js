import React from 'react'
import {connect} from 'dva'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import classnames from 'classnames'
import {Link} from 'dva/router'

import {Icon,Pagination} from 'antd'
import Button from 'material-ui/Button'
import Nav from '../../components/header'
import Footer from '../../components/footer'
import styles from './blogstyles'
class Blogs extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {app,dispatch}=this.props
        dispatch({
            type:"blogs/getFrontBlogs"
        })

        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    componentDidUpdate(){
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    onChange =(pageNumber)=> {
        console.log('Page: ', pageNumber);
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
                                <img className={classes.authorAvatar} src="/assets/blogs/authorimg.jpg" alt=""/>
                            </div>
                            <div className={classes.authorInfo}>
                                <h1 className={classes.authorName}>Doctor White</h1>
                                <p className={classes.authorPersonalInfo}> Feb 2, 1994 &nbsp;&nbsp;&nbsp;&nbsp;  <a href="" style={{fontSize:14}}><Icon type="star"/>510559413@qq.com</a></p>
                                <p className={classes.authordesc}>Proficient in PHP, Mysql , Linux , JavaScript , React all stack engineers</p>
                                <p className={classes.sourceCode}>Source Code&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/docwhitetell/laravel-react" target="_blank"><Icon type="github" style={{fontSize:18}}/></a></p>
                            </div>
                        </div>
                        <div className={classes.listsWrapper}>
                            <h3 className={classes.blogsClass}>Original Tech-Articals</h3>
                            <h5 className={classes.blogsDesc}>Include Php , Mysql , Linux , JavaScript , React...Something that might be of interest to you</h5>
                        </div>

                        <div className={classes.blogsWrapper}>
                            <div className={classes.blogsListContent}>
                                <div className={classes.listsHead}>
                                    <div className={classes.listsHeadShadow1}></div>
                                    <div className={classes.listsHeadShadow2}></div>
                                    <Button style={{marginLeft:0}} className={classnames(classes.menuButton)}>
                                        <Icon type="appstore" style={{fontSize:30,color:'#2196F3'}}/>
                                    </Button>
                                    <div className={classes.menuLists}>
                                        <Button className={classnames(classes.menuButton)}>
                                            <Icon type="user" className={classnames(classes.menuActive)}/>
                                        </Button>
                                        <Button className={classnames(classes.menuButton)}>
                                            <Icon type="calendar" className={classnames(classes.menuIcon)} />
                                        </Button>
                                        <Button className={classnames(classes.menuButton)} >
                                            <Icon type="cloud" className={classnames(classes.menuIcon)} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={classes.blogsList} >
                                    <div className={classes.blogsCount}>
                                        <span style={{fontSize:28}}>Articles</span>&nbsp;&nbsp;&nbsp;&nbsp;<small style={{color:'rgba(0,0,0,0.5)',fontWeight:600,fontSize:14}}> 10 Totails</small>
                                    </div>
                                    <Grid container spacing={24}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <div className={classes.cardHeader}>
                                                    <h1 className={classes.cardTitle}>Latest Publish Article</h1>
                                                </div>
                                                <Divider/>
                                                <div className={classes.articleData}>
                                                    <div className={classes.dataItem}>
                                                        <div className={classes.dataIcon}>
                                                            <img className={classes.dataIconImg} src="/assets/blogs/icon1.png" alt=""/>
                                                        </div>
                                                        <div className={classes.dataInfo}>
                                                            <h1 className={classes.dataNum}>1</h1>
                                                            <p className={classes.dataName}>Published Articles</p>
                                                        </div>
                                                    </div>
                                                    <div className={classes.dataItem}>
                                                        <div className={classes.dataIcon}>
                                                            <img className={classes.dataIconImg} src="/assets/blogs/icon2.png" alt=""/>
                                                        </div>
                                                        <div className={classes.dataInfo}>
                                                            <h1 className={classes.dataNum}>1</h1>
                                                            <p className={classes.dataName}>Published Articles</p>
                                                        </div>
                                                    </div>
                                                    <div className={classes.dataItem}>
                                                        <div className={classes.dataIcon}>
                                                            <img className={classes.dataIconImg} src="/assets/blogs/icon3.png" alt=""/>
                                                        </div>
                                                        <div className={classes.dataInfo} >
                                                            <h1 className={classes.dataNum}>365 day</h1>
                                                            <p className={classes.dataName}>Active Time</p>
                                                        </div>
                                                    </div>
                                                    <div className={classes.dataItemSmall}>
                                                        <div className={classes.dataInfo}>
                                                            <h1 className={classes.dataNum}>242</h1>
                                                            <p className={classes.dataName}>Published Articles</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Grid>

                                        { blogs.frontBlogsLists.map((item,index)=>{
                                            return(
                                                    <Grid item xs={12} sm={6} md={6} key={index}>
                                                        <Card>
                                                            <div className={classes.cardHeader} style={{padding:'24px 30px'}}>
                                                                <Link to={`/blogs/${item.id}`}>
                                                                    <h1 style={{color:'rgba(0,0,0,0.5)',fontSize:20,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                                                                        {item.title}
                                                                    </h1>
                                                                </Link>
                                                            </div>
                                                            <Divider/>
                                                            <Link to={`/blogs/${item.id}`}>
                                                                <div className={classes.articleDesc}
                                                                     style={{
                                                                         height: 200,
                                                                         padding: '0 40px',
                                                                         position: 'relative'
                                                                     }}>
                                                                    <p style={{
                                                                        position: 'absolute',
                                                                        bottom: 10,
                                                                        zIndex: 200,
                                                                        color: '#ffffff',
                                                                        fontSize: 16,
                                                                        width: '90%',
                                                                        left: '5%'
                                                                    }}>
                                                                        {item.description}{item.description}{item.description}
                                                                        <br/>
                                                                        <span style={{fontSize:12}}>{item.created_at}</span>
                                                                        </p>

                                                                    <div className={classes.blogBg}
                                                                         style={{
                                                                             background: `url(${item.poster})`,
                                                                             position: 'absolute',
                                                                             top: 0,
                                                                             left: 0,
                                                                             width: '100%',
                                                                             height: '100%',
                                                                             backgroundSize: 'cover',
                                                                             filter: 'blur(2px)',
                                                                             backgroundPosition: 'left bottom'
                                                                         }}></div>
                                                                </div>
                                                            </Link>
                                                        </Card>
                                                    </Grid>
                                                )

                                        })}
                                    </Grid>
                                </div>
                            </div>
                        </div>

                        {/*<div className={classes.paginate} style={{width:'90%',maxWidth:1000,margin:'0 auto',textAlign:'center'}}>
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
                        </div>*/}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default connect(({app,blogs})=>({app,blogs}))(withStyles(styles)(Blogs))