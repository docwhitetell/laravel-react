import React from 'react'
import {Link} from 'react-router-dom'
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';
import List , { ListItem,  ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import {  Icon } from 'antd';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import config from '../utils/config'

const LeftMenu=({dropDown,style,classes,handleClick,handleChangeTheme,app})=>{
    const selectItem=app.canChoice.map((item,index)=>{
        return (
            <MenuItem className={classes.themeItem} value={item.name} key={index}>
                {item.Lable}
                <span className={classes.themeExample} style={{background:item.color}}></span>
            </MenuItem>
        )
    })

    return(
        <div>
            <div style={{lineHeight:'32px'}}>
                <p style={{textAlign:'center',height:32,LineHeight:'32px',fontSize:18}}>
                    For The Best experience
                </p>
                <p style={{textAlign:'center',height:32,LineHeight:'32px',fontSize:14}}>
                    Please Use Chrome Browser
                </p>

            </div>
            <Divider/>
            <List subheader={<ListSubheader>Dashboard</ListSubheader>}>
                <Link to="/dashboard">
                    <ListItem button>
                        <Icon type="pie-chart" className={classes.menuIcon} />
                        <ListItemText primary="Dashboard" className={style.menuItem}/>
                    </ListItem>
                </Link>
                <Link to="/user">
                    <ListItem button>
                        <Icon type="team" className={classes.menuIcon} />
                        <ListItemText primary="User" className={style.menuItem}/>
                    </ListItem>
                </Link>
                <Link to="/news">
                    <ListItem button>
                        <Icon type="appstore" className={classes.menuIcon} />
                        <ListItemText primary="News" className={style.menuItem}/>
                    </ListItem>
                </Link>
                <ListItem button key={0} onClick={()=>{handleClick('notes')}}>
                    <Icon type="file-text" className={classes.menuIcon} />
                    <ListItemText primary="Notes" className={style.menuItem}/>
                    {dropDown.notes ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.notes} transitionDuration="auto" unmountOnExit>
                    <Link to="/notes">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="bars" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="List"/>
                        </ListItem>
                    </Link>
                    <Link to="/note/add">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="edit" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="Add"/>
                        </ListItem>
                    </Link>
                </Collapse>
                <ListItem button key={1} onClick={()=>{handleClick('ui')}}>
                    <Icon type="smile-o" className={classes.menuIcon} />
                    <ListItemText primary="UI Element" className={style.menuItem}/>
                    {dropDown.ui ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.ui} transitionDuration="auto" unmountOnExit>
                    <Link to="/UIElement/editor">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="edit" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="editor"/>
                        </ListItem>
                    </Link>
                    <Link to="/UIElement/table">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="file-text" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="table"/>
                        </ListItem>
                    </Link>
                    <Link to="/UIElement/form">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="file-excel" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="form"/>
                        </ListItem>
                    </Link>
                </Collapse>

                <ListItem button key={2} onClick={()=>{handleClick('upload')}}>
                    <Icon type="cloud-upload" className={classes.menuIcon} />
                    <ListItemText primary="Upload" className={style.menuItem}/>
                    {dropDown.upload ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.upload} transitionDuration="auto" unmountOnExit>
                    <Link to="/multi-upload">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="upload" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="Multi-File Upload"/>
                        </ListItem>
                    </Link>
                    <Link to="/my-files">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="file" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="My Files"/>
                        </ListItem>
                    </Link>
                    <Link to="/files-lists">
                        <ListItem button className={style.secondMenuItem}>
                            <Icon type="bars" className={classes.menuIcon} />
                            <ListItemText style={{fontSize: '14px'}}
                                          primary="Files-List"/>
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
    )
}

export default LeftMenu