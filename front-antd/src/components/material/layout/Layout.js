import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
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
import Cookies from 'js-cookie'
import style2 from './Layout.css'

const drawerWidth = 240;


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
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
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
        [theme.breakpoints.up('sm')]: {
            minHeight: 'calc(100vh - 64px)',
            marginTop: 64,
        },
    },
});
const ResponsiveDrawer=({app,dispatch,children,classes,theme})=> {
    const {dropDown1 ,mobileOpen}=app

    function handleClick(){
        dispatch({
            type:'app/dropdownShowHide',
        })
    }
    const handleDrawerToggle = () => {
        dispatch({
            type:'app/drawerShowHide',
        })
    };
    if(app.user && Cookies('access_token')){

    }
    else{
        dispatch({
            type:'app/queryUser',
            payload:app.user
        })
    }

        const drawer = (
            <div>
                <div className={classes.drawerHeader} />
                <Divider/>
                <List subheader={<ListSubheader>Dashboard</ListSubheader>}>
                    <Link to="/dashboard">
                        <ListItem button>
                            <ListItemText primary="Dashboard" className={style2.menuItem} />
                        </ListItem>
                    </Link>
                    <Link to="/user">
                        <ListItem button>
                            <ListItemText primary="User" className={style2.menuItem}  />
                        </ListItem>
                    </Link>
                    <Link to="/news">
                        <ListItem button>
                            <ListItemText primary="News" className={style2.menuItem}  />
                        </ListItem>
                    </Link>
                    <ListItem button key={0} onClick={ handleClick }>
                        <ListItemText primary="Collapse" className={style2.menuItem}  />
                        {dropDown1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={dropDown1} transitionDuration="auto" unmountOnExit>
                        <Link to="/editor">
                            <ListItem button>
                                <ListItemText className={style2.secondMenuItem} style={{fontSize:'14px'}} primary="Editor"  />
                            </ListItem>
                        </Link>
                    </Collapse>
                </List>
            </div>
        );


        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                Material-Design
                            </Typography>
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
                            style={{width:250}}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        {children}
                    </main>
                </div>
                <footer style={{textAlign:'center',height:60,lineHeight:'70px',backgroundColor:'#ff4081',color:'#ffffff'}}>
                    Copy Right @ Doc.White  2017-10-10&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a href="javascript:void(0)" style={{color:'#ffffff',textDecoration:'underline'}}>510559413@qq.com</a>
                </footer>
            </div>
        );

}

ResponsiveDrawer.propTypes = {

};

export default connect(({app,dispatch})=>({app,dispatch}))(withStyles(styles, { withTheme: true })(ResponsiveDrawer));