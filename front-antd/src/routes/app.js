import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { withRouter } from 'dva/router'
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import ListSubheader from 'material-ui/List/ListSubheader';
import List , { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import { Menu, Icon } from 'antd';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormLabel, FormControlLabel , FormHelperText } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Select from 'material-ui/Select';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import config from '../utils/config'

import store from 'store'
import Cookies from 'js-cookie'
import style2 from './app.css'
import color from '../utils/theme'

const drawerWidth = 240;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
let lastHref

const styles = theme => ({
    root: {
        width: '100%',
        minHeight:'100%',
        marginTop:0,
        zIndex: 1,
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
        backgroundColor: theme.palette.background.default,
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

const ResponsiveDrawer=({app,dispatch,children,classes,theme,loading,location})=> {
    const {dropDown ,mobileOpen}=app

    let { pathname } = location
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
    const href = window.location.href
    
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
    const selectItem=app.canChoice.map((item,index)=>{
        return (
            <MenuItem className={classes.themeItem} value={item.name} key={index}>
                {item.Lable}
                <span className={classes.themeExample} style={{background:item.color}}></span>
            </MenuItem>
        )
    })
    const drawer = (
        <div>
            <div className={classes.drawerHeader}/>
            <Divider/>
            <List subheader={<ListSubheader>Dashboard</ListSubheader>}>
                <Link to="/dashboard">
                    <ListItem button>
                        <Icon type="pie-chart" className={classes.menuIcon} />
                        <ListItemText primary="Dashboard" className={style2.menuItem}/>
                    </ListItem>
                </Link>
                <Link to="/user">
                    <ListItem button>
                        <Icon type="team" className={classes.menuIcon} />
                        <ListItemText primary="User" className={style2.menuItem}/>
                    </ListItem>
                </Link>
                <Link to="/news">
                    <ListItem button>
                        <Icon type="appstore" className={classes.menuIcon} />
                        <ListItemText primary="News" className={style2.menuItem}/>
                    </ListItem>
                </Link>
                <ListItem button key={0} onClick={()=>{handleClick('notes')}}>
                    <Icon type="file-text" className={classes.menuIcon} />
                    <ListItemText primary="Notes" className={style2.menuItem}/>
                    {dropDown.notes ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.notes} transitionDuration="auto" unmountOnExit>
                    <Link to="/notes">
                        <ListItem button className={style2.secondMenuItem}>
                            <Icon type="bars" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="List"/>
                        </ListItem>
                    </Link>
                    <Link to="/note/add">
                        <ListItem button className={style2.secondMenuItem}>
                            <Icon type="edit" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="Add"/>
                        </ListItem>
                    </Link>
                </Collapse>
                <ListItem button key={1} onClick={()=>{handleClick('ui')}}>
                    <Icon type="smile-o" className={classes.menuIcon} />
                    <ListItemText primary="UI Element" className={style2.menuItem}/>
                    {dropDown.ui ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.ui} transitionDuration="auto" unmountOnExit>
                    <Link to="/UIElement/editor">
                        <ListItem button className={style2.secondMenuItem}>
                            <Icon type="edit" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="editor"/>
                        </ListItem>
                    </Link>
                </Collapse>

                <ListItem button key={2} onClick={()=>{handleClick('upload')}}>
                    <Icon type="cloud-upload" className={classes.menuIcon} />
                    <ListItemText primary="Upload" className={style2.menuItem}/>
                    {dropDown.upload ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.upload} transitionDuration="auto" unmountOnExit>
                    <Link to="/upload/multi">
                        <ListItem button className={style2.secondMenuItem}>
                            <Icon type="upload" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="Multi-File Upload"/>
                        </ListItem>
                    </Link>
                    <Link to="/upload/my-files">
                        <ListItem button className={style2.secondMenuItem}>
                            <Icon type="file" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="My Files"/>
                        </ListItem>
                    </Link>
                </Collapse>
            </List>
            <div className={classes.fixedBottom}>
                <FormControl className={classes.themeSelectBox}>
                    <InputLabel htmlFor="theme" className={classes.themeLable}>Theme</InputLabel>
                    <Select
                        value={app.currentColor}
                        onChange={handleChangeTheme}
                        input={<Input id="theme" />}
                        className={classes.themeSelect}
                    >
                        {selectItem}
                    </Select>
                </FormControl>

            </div>

        </div>
    );
    if(pathname==='/' || pathname==='/login'){
        return (<div className={classes.root} style={{minHeight:'100vh'}}>
            {children}
        </div>)
    }else{
        return (
            <MuiThemeProvider theme={app.theme}>
                <div className={classes.root}>
                    <div className={classes.appFrame}>
                        <AppBar className={classes.appBar} color="primary">
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    color="contrast"
                                    aria-label="open drawer"
                                    onClick={handleDrawerToggle}
                                    className={classes.navIconHide}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Typography type="title" style={{color:'#ffffff'}} noWrap>
                                    {config.name}
                                </Typography>
                                {app.user !== null &&
                                <div style={{position: 'absolute', right: '20px'}}>
                                    <Menu
                                        mode="horizontal"
                                        style={{backgroundColor: 'inherit', borderBottom: 'none'}}
                                        onClick={handleUserLogout}
                                        theme="light"
                                    >
                                        <SubMenu title={<span style={{color: '#ffffff'}}><Icon
                                            type="user"/>{app.user.name}</span>}>
                                            <Menu.Item key="logout"><Icon type="logout"/>Logout</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </div>
                                }
                            </Toolbar>
                        </AppBar>
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
                                {drawer}
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
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <main className={classes.content}>
                            {children}
                        </main>
                    </div>
                    <AppBar color="primary" position="static" className={classes.footer} >
                        <Toolbar>
                            <Typography type="title" color="inherit" style={{fontSize: 14,color: '#ffffff'}}>
                                Copy Right @ Doc.White 2017-10-10&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a
                                href="javascript:void(0)" style={{color: '#ffffff', textDecoration: 'underline'}}>510559413@qq.com</a>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </MuiThemeProvider>
        );
    }


}

ResponsiveDrawer.propTypes = {
};

export default withRouter(connect(({app})=>({app}))(withStyles(styles,{withTheme:true})(ResponsiveDrawer)));