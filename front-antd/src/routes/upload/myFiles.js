import React from 'react'
import {connect} from 'dva'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Bricks from 'bricks.js'
import AppBar from 'material-ui/AppBar';
import CirLoading from '../../components/loading/CirLoading'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Tabs, { Tab } from 'material-ui/Tabs';
import {Icon} from 'antd'
import style from './myfiles.css'

const sizes = [
    { columns: 3, gutter: 10 },                   // assumed to be mobile, because of the missing mq property
    { mq: '768px', columns: 3, gutter: 25 },
    { mq: '1024px', columns: 4, gutter: 50 }
]

// create an instance

const instance = Bricks({
    container: '.container',
    packed:    'data-packed',        // if not prefixed with 'data-', it will be added
    sizes:     sizes
})



const styles = theme => ({
    pageHeader:{
        backgroundColor:theme.palette.primary[800],
        height:100
    },
    pageTitle:{
        color:theme.palette.common.white,
        height:80,
        lineHeight:'100px',
        fontSize:20,
        textIndent:20
    },
    gridList: {
        height: 'auto',
    },
    subheader: {
        width: '100%',
    },
    tabsroot:{
      /*  backgroundColor: theme.palette.background.paper,*/
        marginBottom:6
    },
})
function TabContainer(props) {
    return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}
class myFiles extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const {dispatch} = this.props
        dispatch({
            type:'files/query',
        })
    }
    handleRequestClose=(index)=>{
        console.log(index)
        const {dispatch}=this.props
        dispatch({
            type:'files/dialogClose',
            payload:index
        })
    }
    handleOpen=(index)=>{
        console.log(index)
        const {dispatch}=this.props
        dispatch({
            type:'files/dialogOpen',
            payload:index
        })
    }
    handleDelete=(id)=>{
        console.log(id)
        const {dispatch}=this.props
        dispatch({
            type:'files/delete',
            payload:id
        })
    }
    handleAlertOpen=(index)=>{
        const {dispatch}=this.props
        dispatch({
            type:'files/alertOpen',
            payload:index
        })
    }
    handleAlertClose=(index)=>{
        console.log(index)
        const {dispatch}=this.props
        dispatch({
            type:'files/alertClose',
            payload:index
        })
    }
    handleTabsChange=(event,value)=>{
        console.log(value)
        const {dispatch}=this.props
        value===1?dispatch({type:'files/queryVideos'}):dispatch({type:'files/query'})

        dispatch({
            type:'files/update',
            payload:{
                tabs:value
            }
        })
    }
    render(){
        const {files,classes}=this.props
        const {filesList,open,alert,tabs}=files
        return (
            <div>
                <div className={classes.tabsroot}  style={{maxWidth:860,margin:'20px auto'}}>
                    <AppBar position="static" color="default">
                        <Tabs value={tabs} onChange={this.handleTabsChange} indicatorColor="primary" centered>
                            <Tab label="Images" />
                            <Tab label="Videos" />
                        </Tabs>
                    </AppBar>
                    { tabs===0 &&
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {filesList.map((item,index) =>{
                            return(
                                <GridListTile key={index} cols={1} className={style.gridItem}>
                                    <img src={item.path} style={{width:'100%',height:'100%'}} alt=""/>
                                    <div className={style.mask}>
                                        <div className={style.Delete}><Icon type="delete" className={style.DeleteIcon} onClick={()=>this.handleAlertOpen(index,item.id)}  /></div>
                                        <div className={style.Play} ><Icon type="eye-o" className={style.PlayIcon} onClick={()=>this.handleOpen(index)} /></div>
                                    </div>
                                    <Dialog open={alert[index]} onRequestClose={()=>this.handleAlertClose(index)}>
                                        <DialogTitle>{"Delete ？"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                ARE YOU SURE YOU DON'T NEED IT ANY MORE?<br/>
                                                （{item.original_name}）
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=>this.handleDelete(item.id)} color="primary">
                                                YES
                                            </Button>
                                            <Button onClick={()=>this.handleAlertClose(index)} color="primary" autoFocus>
                                                NO
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <Dialog open={open[index]} onRequestClose={()=>this.handleRequestClose(index)} maxWidth="md">
                                        <DialogTitle>{item.original_name}</DialogTitle>
                                        <DialogContent>
                                            <img src={item.path} style={{width:'100%'}} alt=""/>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=>this.handleRequestClose(index)} color="primary">
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                </GridListTile>
                            )
                        })}
                    </GridList>
                    }

                    { tabs===1 &&
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {filesList.map((item,index) =>{
                        return(
                            <GridListTile key={index} cols={1} className={style.gridItem}>
                                <CardMedia
                                    style={{objectit:'fill',height:'100%'}}
                                    component="video"
                                    src={item.path}
                                    muted
                                />
                                <div className={style.videoMask}>
                                    <h1 className={style.videoTitle}>{item.original_name}</h1>
                                    <div className={style.Delete}><Icon type="delete" className={style.DeleteIcon} onClick={()=>this.handleAlertOpen(index,item.id)}  /></div>
                                    <div className={style.Play} ><Icon type="play-circle" className={style.PlayIcon} onClick={()=>this.handleOpen(index)} /></div>
                                </div>
                                <Dialog open={alert[index]} onRequestClose={()=>this.handleAlertClose(index)}>
                                    <DialogTitle>{"Delete ？"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            ARE YOU SURE YOU DON'T NEED IT ANY MORE?<br/>
                                            （{item.original_name}）
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={()=>this.handleDelete(item.id)} color="primary">
                                            YES
                                        </Button>
                                        <Button onClick={()=>this.handleAlertClose(index)} color="primary" autoFocus>
                                            NO
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Dialog open={open[index]} onRequestClose={()=>this.handleRequestClose(index)} maxWidth="md">
                                    <DialogTitle>{item.original_name}</DialogTitle>
                                    <DialogContent>
                                        <CardMedia
                                            component="video"
                                            src={item.path}
                                            autoPlay
                                            controls
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={()=>this.handleRequestClose(index)} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                            </GridListTile>
                        )
                    })}
                </GridList>
                }
                </div>

            </div>
        )
    }

}
export default connect(({files})=>({files}))(withStyles(styles)(myFiles));
