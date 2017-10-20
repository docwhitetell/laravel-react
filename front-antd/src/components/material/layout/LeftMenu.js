import React from 'react'
import {Link} from 'react-router-dom'
//AppBar
import Drawer from 'material-ui/Drawer';
import ListSubheader from 'material-ui/List/ListSubheader';
import List , { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

import Divider from 'material-ui/Divider';
import styles from './LeftMenu.css'
class LeftMenu extends React.Component{
   constructor(props){
       super(props)
       this.state={
           open:true
       }
       this.handleClick = this.handleClick.bind(this);
   }
    handleClick () {
        this.setState({ open: !this.state.open });
    };

   render(){
       const classes=styles
       return(
           <Drawer
               type="permanent"
               classes={{
                   paper: classes.drawerPaper,
               }}
           >
               <div className={classes.drawerHeader}/>
               <Divider/>
               <List subheader={<ListSubheader>Dashboard</ListSubheader>}>
                   <Link to="/login">
                       <ListItem button>
                           <ListItemText primary="Login" className={classes.menuItem}/>
                       </ListItem>
                   </Link>
                   <Link to="/material">
                       <ListItem button>
                           <ListItemText primary="Home" className={classes.menuItem}/>
                       </ListItem>
                   </Link>
                   <Link to="/material/user">
                       <ListItem button>
                           <ListItemText primary="User" className={classes.menuItem}/>
                       </ListItem>
                   </Link>
                   <ListItem button onClick={this.handleClick}>
                       <ListItemText primary="Collapse" className={classes.menuItem} />
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
           </Drawer>
       )
   }
}

export default LeftMenu