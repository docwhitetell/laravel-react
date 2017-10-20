import React from 'react';
import PropTypes from 'prop-types';
//AppBar
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
//AppBar
import Typography from 'material-ui/Typography';
import LeftMenu from './LeftMenu'
import styles from './Layout.css'
import {Button} from 'material-ui'
import Cookies from 'js-cookie'
import axios from 'axios'
import Menu, { MenuItem } from 'material-ui/Menu';
import Hidden from 'material-ui/Hidden';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';



class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            anchorEl: null,
            dropdown:false,
            sidebar:false
        }
    }
    handleClick = event => {
        this.setState({ dropdown: true, anchorEl: event.currentTarget });
    };
    handleLogout = () => {
        this.setState({ dropdown: false });
        Cookies.remove('user_name')
        Cookies.remove('user_id')
        Cookies.remove('user_email')
        Cookies.remove('token')
        Cookies.remove('refresh_token')
        Cookies.remove('expires_in')
        window.location='http://localhost:8000/login'
    };
    handleRequestClose=()=>{
        this.setState({ dropdown: false });
    }
    render() {
        const props=this.props
        const classes = styles
        const {children}=props
        let user=null
        if(Cookies('user_name')){
            user=Cookies('user_name')
        }
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar} color="accent">
                        <Toolbar>
                            <Typography type="title" color="inherit" noWrap>
                                Material-Design
                            </Typography>
                            {
                                user &&
                                <span className={classes.floatRight}>Welcome Back!
                                    <Button color="contrast" className={classes.user} aria-owns={this.state.dropdown ? 'simple-menu' : null}
                                            aria-haspopup="true"
                                            onClick={this.handleClick}>{user}</Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={this.state.anchorEl}
                                        open={this.state.dropdown}
                                        onRequestClose={this.handleRequestClose}
                                        className={classes.dropdown}
                                    >
                                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </span>
                            }
                        </Toolbar>
                    </AppBar>
                    <LeftMenu/>
                    <main className={classes.content}>
                        {children}
                        <footer style={{textAlign:'center',height:60,lineHeight:'70px',backgroundColor:'#ff4081',color:'#ffffff'}}>
                            Copy Right @ Doc.White  2017-10-10&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a href="javascript:void(0)" style={{color:'#ffffff',textDecoration:'underline'}}>510559413@qq.com</a>
                        </footer>
                    </main>
                    <footer style={{textAlign:'center',height:60,lineHeight:'70px',backgroundColor:'#ff4081',color:'#ffffff'}}>
                        Copy Right @ Doc.White  2017-10-10&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a href="javascript:void(0)" style={{color:'#ffffff',textDecoration:'underline'}}>510559413@qq.com</a>
                    </footer>
                </div>
            </div>
        );
    }

}

Layout.propTypes = {
};

export default Layout;
