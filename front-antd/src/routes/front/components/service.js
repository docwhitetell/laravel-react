import React from 'react'
import classnames from 'classnames'
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import Button from 'material-ui/Button'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog'
import Play from 'material-ui-icons/PlayArrow'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
const {OverPack}=ScrollAnim
const Service=({data,classes,dispatch})=>{
    const handleRequestClose=(index)=>{
        console.log(index)
        dispatch({
            type:'front/dialogClose',
            payload:index
        })
    }
    const handleOpen=(index)=>{
        console.log(index)
        dispatch({
            type:'front/dialogOpen',
            payload:index
        })
    }
    return(
        <div className={classes.mainContent}>
            <TweenOne key={'about'} className={classes.about}
                      animation={[{opacity:0,scale:0,delay:1000,duration:600},{scale:1,opacity:1,y:0}]}
                      style={{opacity: 0}}>
                <div className={classes.aboutLeft}>
                    <h1 className={classes.aboutTitle} style={{}}>About Material</h1>
                    <div className={classes.gradientDivider}></div>
                </div>
                <div className={classes.aboutRight}>
                    <p className={classes.aboutWord}>Material-UI components work in isolation. They are self-supporting, they will inject, and only inject, the styles they need to display. They don't rely on any global styles like normalize.css. You can use any of the components as demonstrated in the documentation.</p>
                </div>
            </TweenOne>
            <div className={classes.work}>
                <h1 className={classes.sectionName}>Blogs Recommend</h1>
                    <OverPack style={{ width:'100%',}} always={false} playScale={0.1}>
                        <Grid key='container' container spacing={40} style={{minHeight:380}}>
                        {data.blogslist.map((item,index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={6} key={index}>
                                    <TweenOne key={item.title} animation={[{opacity:0,y:-2,duration:300},{opacity:1,y:0,duration:300}]}
                                              style={{opacity: 0, marginBottom: 10}}
                                    >
                                        <div className={classes.serviceItem}>
                                            <div className={classes.serviceContent}>
                                                <div className={classes.blogPoster}
                                                     style={{
                                                         backgroundImage: `url(${item.poster})`,
                                                     }} ></div>
                                                <h1 className={classes.serviceName}>{item.title}</h1>
                                                <p className={classes.serviceDesc}>{item.description}</p>
                                            </div>
                                        </div>
                                    </TweenOne>
                                </Grid>

                            )
                        })}
                    </Grid>
                    </OverPack>
            </div>
            <div className={classes.work}>
                <h1 className={classes.sectionName}>Videos Recommend</h1>
                <OverPack style={{ width:'100%',}} always={false} playScale={0.1}>
                    <Grid key='container' container spacing={40} style={{minHeight:380}}>
                        {data.video.map((item,index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={6} key={index}>
                                    <TweenOne key={item.title} animation={[{opacity:0,y:-2,duration:300},{opacity:1,y:0,duration:300}]}
                                              style={{opacity: 0, marginBottom: 10}}
                                    >
                                        <div className={classes.mediaWrapper} >
                                            <CardMedia
                                                component="video"
                                                src={item.path}
                                                muted
                                                className={classes.theMedia}
                                            />
                                            <div className={classes.mediaMask}>
                                                <Button fab raised color="primary" className={classes.mediaPlayButton} onClick={() => handleOpen(index)}>
                                                    <Play className={classnames('playicon',classes.playIcon)}/>
                                                </Button>
                                                <h1 className={classes.mediaName}>{item.original_name}</h1>
                                            </div>
                                            <Dialog open={data.dialog[index]} onRequestClose={() => handleRequestClose(index)}
                                                    maxWidth="md">
                                                <Hidden mdDown implementation="css">
                                                    <DialogTitle>
                                                        {item.original_name}
                                                    </DialogTitle>
                                                </Hidden>
                                                <DialogContent className={classes.DialogContent}>
                                                    <CardMedia
                                                        component="video"
                                                        src={item.path}
                                                        autoPlay
                                                        controls
                                                    />
                                                </DialogContent>
                                                <Hidden mdDown implementation="css">
                                                    <DialogActions>
                                                        <Button  raised onClick={() => handleRequestClose(index)} color="accent">
                                                            Close
                                                        </Button>
                                                    </DialogActions>
                                                </Hidden>
                                            </Dialog>
                                        </div>
                                    </TweenOne>
                                </Grid>
                            )
                        })}
                    </Grid>
                </OverPack>
            </div>
        </div>
    )
}

export default Service