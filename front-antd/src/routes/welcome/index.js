import React from 'react';
import { connect } from 'dva';
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import TextField from 'material-ui/TextField';
import Hidden from 'material-ui/Hidden'
const headerHeight=54
const styles=theme=>({
    root:{
        height:'auto',
        overflow:'hidden'
    },
    header:{
        position:'absolute',
        top:64,left:'50%',
        display:'flex',
        width:'100%',height:`${headerHeight}px`,
        maxWidth:'1000px',
        padding:'0 40px',
        transform:'translate(-50%,0)',
        zIndex:9999,
    },
    navIconHide:{
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logo:{
        flex:2,
        height:`${headerHeight}px`,
        lineHeight:`${headerHeight}px`,
    },
    nav:{
        flex:4,
        height:`${headerHeight}px`
    },
    navLists:{
        height:`${headerHeight}px`,
        textAlign:'right',
    },
    navItem:{
        display:'inline-block',
        height:`${headerHeight}px`,
        lineHeight:`${headerHeight}px`,
        marginRight:48,
    },
    navItemName:{
        color:'#BDBDBD',
        fontSize:'16px',

        '&:hover':{
            color:'#ffffff'
        }
    },
    signIU:{
        flex:3,
        height:`${headerHeight}px`,
        textAlign:'right',
        marginTop:5
    },
    register:{
        background:'rgba(255,255,255,0.16)',
        height:'44px',
        borderRadius:4,
        fontSize:'16px',
        color:'#ffffff',
        padding:'0 24px',
        display:'inline-block',
        lineHeight:'44px',
        marginRight:10,
        float:'right'
    },
    login:{
        border:'2px solid rgba(255,255,255,0.16)',
        height:'44px',
        borderRadius:4,
        fontSize:'16px',
        color:'#ffffff',
        padding:'0 24px',
        display:'inline-block',
        lineHeight:'40px',
        float:'right'
    },

    banner:{
        height:'800px',
        background:'linear-gradient(127deg, #462EB4, #AF61D1)'
    },
    bannerWrapper:{
      height:'100%',
        position:'relative'
    },
    bannerTitle:{
        position:'absolute',
        top:'300px',left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'40px',
        color:'#ffffff',
        fontFamily:'ChannelSlanted2e7519d26e1b090',
        textAlign:'center'
    },
    titleDescription:{
        marginTop:18,
        fontFamily:'apple',
        fontSize:'16px',
        color:'rgba(255,255,255,0.45)'
    },
    bannerImg:{
        position:'absolute',
        bottom:'0',
        height:'400px',
        width:'100%',
    },
    bannerMainImg:{
        width:800,height:400,
        position:'absolute',
        left:'50%',  bottom:0,
        transform:'translate(-50%,0)',
        borderTopLeftRadius:'6px',
        borderTopRightRadius:'6px',
        overflow:'hidden',
        backgroundImage:"url('/assets/index/banner1.png')",
        backgroundSize:'100%',
        zIndex:200
    },
    leftbg:{
        position:'absolute',
        width:800,height:370,
        bottom:0,
        left:'50%',
        zIndex:1,
        transform:'translate(-56%,0)',
        borderTopLeftRadius:'8px',
        overflow:'hidden',
        backgroundImage:"url('/assets/index/banner2.png')",
        backgroundSize:'100%',
        opacity:0.4
    },
    rightbg:{
        position:'absolute',
        width:800,height:370,
        bottom:0,
        left:'50%',
        zIndex:1,
        borderTopRightRadius:'8px',
        overflow:'hidden',
        transform:'translate(-44%,0)',
        backgroundImage:"url('/assets/index/banner2.png')",
        backgroundSize:'100%',
        opacity:0.4
    },
    mainContent:{
        position:'relative',
        zIndex:300,
        marginBottom:240
    },
    about:{
        width:'90%', maxWidth:1140,
       margin:'-30px auto 0 auto',
        height:260,
        boxShadow:'0px 17px 27px rgba(0,0,0,0.07)',
        background:'#ffffff',
        borderRadius:5,
        display:'flex',
        alignItems:'center',
        padding:'0 80px',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
            justifyContent:'center'
        },

    },
    aboutLeft:{
        marginRight:80,
        [theme.breakpoints.down('md')]: {
            marginRight:0,
            width:'100%',
        },
    },
    aboutTitle:{
        fontSize:32,whiteSpace:'nowrap',
        [theme.breakpoints.up('lg')]: {
            fontSize:32,
        },
        [theme.breakpoints.up('md')]: {
            fontSize:26,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:22,
        },
    },
    gradientDivider:{
        marginTop:18,
        width:96,
        height:4,
        background:'linear-gradient(127deg, #AF61D1, #717BFE)',
        [theme.breakpoints.down('md')]: {
            marginBottom:20
        },
    },
    aboutWord:{
        fontSize:15,
        fontWeight:500
    },
    work:{
        width:'90%',
        maxWidth:1140,
        margin:'100px auto'
    },
    serviceItem:{
        height:340,width:'100%',
        boxShadow:'0px 17px 27px rgba(0,0,0,0.07)',
        borderRadius:6,overflow:'hidden'
    },
    borderTop:{
        height:3,width:'100%',
        background:'linear-gradient(127deg, #AF61D1, #717BFE)'
    },
    serviceContent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'100%',
        justifyContent:'center'
    },
    serviceName:{
        fontSize:21,
        margin:'20px 0'
    },
    serviceDesc:{
        fontSize:16,
        width:'70%',
        textAlign:'center',
        fontWeight:500
    },
    footer:{
        background:'#262741',
        height:400,
    },
    registerForm:{
        height:200,
        width:'96%',margin:'0 auto',
        padding:'0 40px',
        top:-100,
        position:'relative',
        background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
        borderRadius:100,
        display:'flex',
        alignItems:'center',
    },
    form:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        [theme.breakpoints.down('sm')]: {
            alignItems:'center',
            flexDirection:'column',
        },
    },
    formGroup:{
        [theme.breakpoints.down('md')]: {
            width:140
        },
    },
    formIcon:{
        color:'#ffffff',
        fontSize:18,
        marginRight:14,
        display:'inline-block',
        float:'left'
    },
    formInput:{
        border:'none',
        display:'inline-block',
        background:'transparent',
        outline:'none',
        color:'#ffffff',
        fontSize:14,
        '&::-moz-placeholder':{
            color:'#ffffff'
        },
        '&::-webkit-input-placeholder':{
            color:'#ffffff',
            fontSize:16,
            lineHeight:'22px',
        },
        [theme.breakpoints.down('md')]: {
           width:108
        },
        [theme.breakpoints.down('sm')]: {
            '&::-webkit-input-placeholder':{
                textAlign:'center'
            },
        },
    },
    footerMain:{
        height:300,
        position:'relative',
        top:-100,
        padding:'0 40px',
        maxWidth:1140,margin:'0 auto',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'start',
    },
    footcopyright:{

    },
    author:{
        color:'#ffffff',
        fontSize:14,
        textAlign:'center'
    },
    authorImg:{
        display:'block',margin:'0 auto'
    },
    footLinks:{
        [theme.breakpoints.down('md')]: {
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'center',
        },
    },
    footLinksTitle:{
        textAlign:'right',color:'rgba(255,255,255,0.4)',
        [theme.breakpoints.down('md')]: {
            textAlign:'center',
        },
    },
    footLinksItem:{
        textAlign:'right',lineHeight:'32px',
        [theme.breakpoints.down('md')]: {
            display:'inline-block',
            textAlign:'center',
            padding:'0 20px'
        },
    },
    flink:{
        fontSize:16,
        color:'#ffffff',
        textDecoration:'underline'
    }
})


function Index({index,classes}) {
    function handleOnWheel(e) {
        console.log(e.deltaY)
    }

    let canSlide=true
    return (
    <div className={classes.root}>
        <header id="header" className={classes.header}>
            <div className={classes.logo}>
                <IconButton
                    color="accent"
                    aria-label="open drawer"
                    className={classes.navIconHide}
                >
                    <MenuIcon/>
                </IconButton>
                <span style={{color:'#ffffff',fontSize:'32px',fontWeight:700,fontFamily:'baloo'}}>Logo</span>
            </div>
            <div className={classes.nav}>
                <ul className={classes.navLists}>
                    <li className={classes.navItem}><Link to="/login" className={classes.navItemName}>Home</Link></li>
                    <li className={classes.navItem}><Link to="/login" className={classes.navItemName}>profile</Link></li>
                    <li className={classes.navItem}><Link to="/login" className={classes.navItemName}>Posts</Link></li>
                    <li className={classes.navItem}><Link to="/login" className={classes.navItemName}>Videos</Link></li>
                </ul>
            </div>
            <div className={classes.signIU}>
                <Link to="/login" className={classes.login}>Sign In</Link>
                <Link to="/login" className={classes.register}>Sign Up</Link>
            </div>
        </header>
        <div className={classes.banner}>
            <div className={classes.bannerWrapper}>
                <div className={classes.bannerTitle}>
                    Source video hosting
                    <p className={classes.titleDescription}>
                        Sign up or check back for updates
                    </p>
                </div>
                <div className={classes.bannerImg}>
                    <div className={classes.leftbg}></div>
                    <div className={classes.bannerMainImg}></div>
                    <div className={classes.rightbg}></div>
                </div>
            </div>
        </div>
        <div className={classes.mainContent}>
            <div className={classes.about}>
                <div className={classes.aboutLeft}>
                    <h1 className={classes.aboutTitle} style={{}}>About Material</h1>
                    <div className={classes.gradientDivider}></div>
                </div>
                <div className={classes.aboutRight}>
                    <p className={classes.aboutWord}>Material-UI components work in isolation. They are self-supporting, they will inject, and only inject, the styles they need to display. They don't rely on any global styles like normalize.css. You can use any of the components as demonstrated in the documentation.</p>
                </div>
            </div>
            <div className={classes.work}>
                <h1 style={{textAlign:'center',marginBottom:80}}>What's Can We Provide?</h1>
                <Grid container spacing={40}>
                    <Grid item sm={12} md={6}>
                        <div className={classes.serviceItem}>
                            <div className={classes.borderTop}></div>
                            <div className={classes.serviceContent}>
                                <img src="/assets/index/work1.png" width={64} height={64}  alt=""/>
                                <h1 className={classes.serviceName} >Post Your Products</h1>
                                <p className={classes.serviceDesc} >Please upload and show your excellent products heartily！</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className={classes.serviceItem}>
                            <div className={classes.borderTop}></div>
                            <div className={classes.serviceContent}>
                                <img src="/assets/index/work2.png" width={64} height={64} alt=""/>
                                <h1 className={classes.serviceName} >News release</h1>
                                <p className={classes.serviceDesc} >It is very convenient to release your news and latest status to the outside world！</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        <footer className={classes.footer}>
            <div className={classes.registerForm}>
                <form className={classes.form} style={{width:'100%'}}>
                   <div className={classes.formGroup}>
                       <Icon type="mail" className={classes.formIcon}/>
                       <input type="email" className={classes.formInput} placeholder="Email"/>
                   </div>
                    <div className={classes.formGroup}>
                        <Icon type="user" className={classes.formIcon}/>
                        <input type="text" className={classes.formInput} placeholder="Name"/>
                    </div>
                    <div className={classes.formGroup}>
                        <Icon type="lock" className={classes.formIcon}/>
                        <input type="password" className={classes.formInput} placeholder="Password"/>
                    </div>
                    <div className={classes.formGroup}>
                        <Link to="/login" className={classes.register}>Sign Up</Link>
                    </div>
                </form>
            </div>
            <div className={classes.footerMain}>
                <Grid container spacing={0} >
                    <Grid item xs={6} sm={6} md={2}>
                        <div className={classes.footcopyright}>
                            <img className={classes.authorImg} src="/assets/index/author.png" width={100} alt=""/>
                            <p className={classes.author}>Author<br/> Doc.White(Wechat)</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}  sm={6} md={2}>
                        <div className={classes.footcopyright}>
                            <a href="https://dribbble.com/uixninja" target="_blank"><img className={classes.authorImg} src="/assets/index/designer.png" width={100} alt=""/></a>
                            <p className={classes.author}>Designer<br/>uixNinja</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <h1 className={classes.footLinksTitle}>Demos</h1>
                        <div>
                            <ul className={classes.footLinks}>
                                <li className={classes.footLinksItem}><Link to="/" className={classes.flink}>Home</Link></li>
                                <li className={classes.footLinksItem}><Link to="/" className={classes.flink}>Profile</Link></li>
                                <li className={classes.footLinksItem}><Link to="/" className={classes.flink}>Posts</Link></li>
                                <li className={classes.footLinksItem}><Link to="/" className={classes.flink}>News</Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}  md={4}>
                        <h1 className={classes.footLinksTitle}>Contacts</h1>
                        <div>
                            <ul className={classes.footLinks}>
                                <li className={classes.footLinksItem}>
                                    <Icon style={{color:'#ffffff',fontSize:18,marginRight:12}} type="mail"/>
                                    <a href="" className={classes.flink}>510559413@qq.com</a>
                                </li>
                                <li className={classes.footLinksItem}>
                                    <Icon style={{color:'#ffffff',fontSize:18,marginRight:12}} type="mail"/>
                                    <a href="" className={classes.flink}>dennis.sevryukov@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

            </div>

        </footer>
    </div>
  );
}

Index.propTypes = {
};

export default connect(({index})=>({index}))(withStyles(styles)(Index));
