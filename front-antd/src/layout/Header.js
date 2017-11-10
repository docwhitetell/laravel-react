import React from 'react'
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Menu, Icon } from 'antd';
import config from '../utils/config'

const SubMenu = Menu.SubMenu;

const Header =({app,classes,handleUserLogout,handleDrawerToggle})=>{

    return (
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
    )
}

export default Header