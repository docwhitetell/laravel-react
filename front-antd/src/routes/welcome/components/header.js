import React from 'react'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {Link} from 'react-router-dom'
const Header=({classes,})=>{
    return (
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
    )
}

export default Header