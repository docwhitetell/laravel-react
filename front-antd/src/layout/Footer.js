import React from 'react'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
const styles=theme=>({
    footer:{
        position: 'absolute',
        paddingRight:'0 !important',
        width:'100%',
        backgroundColor:theme.palette.primary[500],
        [theme.breakpoints.up('md')]: {
            paddingLeft: 250,
        }
    },
})
const Footer =({classes})=>{

return(
    <footer className={classes.footer}>
            <Typography type="title" color="inherit" style={{fontSize: 14,color: '#ffffff',padding:"24px 20px",textAlign:'center'}}>
                Copy Right @ Doc.White 2017-10-10&nbsp;&nbsp;&nbsp;&nbsp;Contact: <a
                href="javascript:void(0)" style={{color: '#ffffff', textDecoration: 'underline'}}>510559413@qq.com</a>
            </Typography>
    </footer>
)
}

export default withStyles(styles)(Footer)