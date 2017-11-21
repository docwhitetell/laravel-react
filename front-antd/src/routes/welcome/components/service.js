import React from 'react'
import Grid from 'material-ui/Grid'
const Service=({classes})=>{
    return(
        <div className={classes.mainContent}>
            <div className={classes.about}>
                <div className={classes.aboutLeft}>
                    <h1 className={classes.aboutTitle} style={{}}>About Material</h1>
                    <div className={classes.gradientDivider}></div>
                </div>
                <div className={classes.aboutRight}>
                    <p className={classes.aboutWord}>Material-UI components work in isolation. They are self-supporting, they will inject, and only inject, the styles they need to display. They don't rely on any global styles like normalize.css. You can use any of the components as demonstrated in the documentation.</p>
                </div>
            </div>
            <div className={classes.work}>
                <h1 style={{textAlign:'center',marginBottom:80}}>What Can We Provide?</h1>
                <Grid container spacing={40}>
                    <Grid item sm={12} md={6}>
                        <div className={classes.serviceItem}>
                            <div className={classes.borderTop}></div>
                            <div className={classes.serviceContent}>
                                <img src="/assets/index/work1.png" width={64} height={64}  alt=""/>
                                <h1 className={classes.serviceName} >Post Your Products</h1>
                                <p className={classes.serviceDesc} >Please upload and show your excellent products heartily！</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className={classes.serviceItem}>
                            <div className={classes.borderTop}></div>
                            <div className={classes.serviceContent}>
                                <img src="/assets/index/work2.png" width={64} height={64} alt=""/>
                                <h1 className={classes.serviceName} >News release</h1>
                                <p className={classes.serviceDesc} >It is very convenient to release your news and latest status to the outside world！</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Service