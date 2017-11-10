import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { withRouter } from 'dva/router'
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import { MuiThemeProvider } from 'material-ui/styles';
import store from 'store'
import Cookies from 'js-cookie'
import LeftMenu from '../layout/LeftMenu'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import CirLoading from '../components/loading/CirLoading'
import style2 from './app.css'
const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        minHeight:'100%',
        marginTop:0,
        zIndex: 1,
        fontFamily: "Microsoft YaHei"
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        paddingRight:'0 !important',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        }
    },
    footer:{
        position: 'absolute',
        paddingRight:'0 !important',
        width:'100%',
        backgroundColor:theme.palette.primary[500],
        [theme.breakpoints.up('md')]: {
            paddingLeft: `${drawerWidth}px`,
        }
    },
    toolbar:{
        position:'relative'
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
    },
    content: {
        backgroundColor: '#f0f2f5',
        width: '100%',
        paddingTop: 0,
        minHeight: 'calc(100vh - 56px)',
        overflow:'hidden',
        marginTop: 56,
        position:'relative',
        [theme.breakpoints.up('sm')]: {
            minHeight: 'calc(100vh - 64px - 64px)',
            marginTop: 64,
        },
    },
    menuIcon:{
        color:'#424242',
        fontSize:'16px'
    },
    fixedBottom:{
        position:'absolute',
        bottom:20,
        width:'90%',
        left:'50%',
        transform:'translate(-50%,0)'
    },
    themeSelectBox:{
        width:160,
        margin:'0 auto',
        display:'block'
    },
    themeItem:{

    },
    themeLable:{
        width:'100%'
    },
    themeSelect:{
        width:'100%'
    },
    themeExample:{
        position:'absolute',
        right:20,top:'50%',marginTop:-10,
        width:20,height:20,
    }
});

const ResponsiveDrawer=({app,children,classes,theme,loading,location,dispatch})=> {
    const {dropDown ,mobileOpen}=app

    let { pathname } = location
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
    
    const handleChangeTheme=(e)=>{
        const value=e.target.value
        const currentColor=value
        store.set('currentColor',currentColor)
        switch (value){
            case "blue":
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.blue}})
                break;
            case 'pink':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.pink}})
                break;
            case 'indigo':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.indigo}})
                break;
            case 'red':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.red}})
                break;
            case 'purple':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.purple}})
                break;
            case 'cyan':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.cyan}})
                break;
            case 'teal':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.teal}})
                break;
            case 'green':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.green}})
                break;
            case 'yellow':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.yellow}})
                break;
            case 'amber':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.amber}})
                break;
            case 'orange':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.orange}})
                break;
            case 'grey':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.grey}})
                break;
            default:
        }
    }

    function handleClick(target){
        dispatch({
            type:'app/dropdownShowHide',
            payload:target
        })
    }
    function handleUserLogout() {
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')
        dispatch({
            type:'app/logout'
        })
    }
    const handleDrawerToggle = () => {
        dispatch({
            type:'app/drawerShowHide',
        })
    };

    if(pathname==='/' || pathname==='/login'){
        return (<div className={classes.root} style={{minHeight:'100vh'}}>
            {children}
        </div>)
    }else{
        return (
            <MuiThemeProvider theme={app.theme}>
                <div className={classes.root}>
                    <div className={classes.appFrame}>
                        <Header app={app} classes={classes} handleUserLogout={handleUserLogout} handleDrawerToggle={handleDrawerToggle}/>
                        <Hidden mdUp implementation="css">
                            <Drawer
                                type="permanen"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                onRequestClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                <LeftMenu app={app} dropDown={dropDown} style={style2} classes={classes} handleClick={handleClick} handleChangeTheme={handleChangeTheme}/>
                            </Drawer>
                        </Hidden>
                        <Hidden mdDown implementation="css">
                            <Drawer
                                type="permanent"
                                open
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                style={{width: 250}}
                            >
                                <LeftMenu app={app} dropDown={dropDown} style={style2} classes={classes} handleClick={handleClick} handleChangeTheme={handleChangeTheme}/>
                            </Drawer>
                        </Hidden>
                        <main className={classes.content}>
                            <CirLoading loading={loading.global}/>
                            {children}
                        </main>
                    </div>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }


}

ResponsiveDrawer.propTypes = {

};

export default withRouter(connect(({app,loading})=>({app,loading}))(withStyles(styles,{withTheme:true})(ResponsiveDrawer)));