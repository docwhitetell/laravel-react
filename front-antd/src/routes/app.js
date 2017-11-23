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

import FrontNav from './front/components/header'
import FrontFooter from './front/components/footer'
import CirLoading from '../components/loading/CirLoading'

import PageHeader from '../components/pageHeader/pageHeader'


import {routeMiddleware} from '../services/routeMiddleware'
/* Material JSS */
import styles from './styles'

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
    /*路由过滤，判断前台还是后台页面。前天过滤页面注册在routeMiddleware 中 */
    if(routeMiddleware(pathname)){
        return (
            <MuiThemeProvider theme={app.theme}>
                <div className={classes.root} style={{minHeight: '100vh'}}>
                    {children}
                </div>
            </MuiThemeProvider>
        )
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
                                <LeftMenu app={app} dropDown={dropDown} classes={classes} handleClick={handleClick} handleChangeTheme={handleChangeTheme}/>
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
                                <LeftMenu app={app} dropDown={dropDown} classes={classes} handleClick={handleClick} handleChangeTheme={handleChangeTheme}/>
                            </Drawer>
                        </Hidden>
                        <main className={classes.content}>
                            {/*<CirLoading loading={loading.global}/>*/}
                            <PageHeader title={app.pageHeader}/>
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