import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';;
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
const drawerWidth = 220;

const styles = theme => ({
    root: {
        width: '100%',
        minHeight:'100%',
        marginTop:0,
        zIndex: 1,
        overflow: 'hidden',
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
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        paddingTop: theme.spacing.unit * 3,
        minHeight: 'calc(100vh - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100vh - 64px)',
            marginTop: 64,
        },
    },
});

class ResponsiveDrawer extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            mobileOpen: false,
            open:true
        }
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick () {
        this.setState({ open: !this.state.open });
    };
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme, children } = this.props;

        const drawer = (
            <div>
                <div className={classes.drawerHeader} />
                <Divider />
                <List subheader={<ListSubheader>Dashboard</ListSubheader>}>
                    <Link to="/login">
                        <ListItem button>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>
                    <Link to="/material">
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/material/user">
                        <ListItem button>
                            <ListItemText primary="User" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemText primary="Collapse"  />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                        <Link to="/material/appbar">
                            <ListItem button className={classes.nested}>
                                <ListItemText className={classes.secondMenuItem} style={{fontSize:'14px'}} primary="AppBar" />
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
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                Material-Design
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden smUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onRequestClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            type="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        {children}
                        <footer style={{textAlign:'center',height:60,lineHeight:'70px',backgroundColor:'#ff4081',color:'#ffffff'}}>
                            Copy Right @ Doc.White  2017-10-10&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a href="javascript:void(0)" style={{color:'#ffffff',textDecoration:'underline'}}>510559413@qq.com</a>
                        </footer>
                    </main>
                </div>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,

};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);