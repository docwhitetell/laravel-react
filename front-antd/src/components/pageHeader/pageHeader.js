import React from 'react'
import { withStyles } from 'material-ui/styles';
const styles=theme=>({
    pageHeader:{
        backgroundColor:theme.palette.primary[800],
        height:100
    },
    pageTitle:{
        color:theme.palette.common.white,
        height:80,
        lineHeight:'100px',
        fontSize:24,
        textIndent:20,
        fontWeight:200,
        fontFamily:'inherit'
    }
})


const pageHeader=({title,children,classes})=>{
    return(
        <section className={classes.pageHeader}>
            <h4 className={classes.pageTitle}>{title}</h4>
            {children}
        </section>
    )
}

export default withStyles(styles)(pageHeader)