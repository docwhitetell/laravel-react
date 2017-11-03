import React from 'react'
import {connect} from 'dva'
import PageHeader from '../../components/pageHeader/pageHeader'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import CirLoading from '../../components/loading/CirLoading'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Tabs, { Tab } from 'material-ui/Tabs';
import {Icon} from 'antd'
import style from './myfiles.css'
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
    }
});
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
            type:'files/query'
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
        dispatch({
            type:'files/update',
            payload:{
                tabs:value
            }
        })
    }
    render(){
        const {files,classes,loading}=this.props
        const {filesList,open,alert,tabs}=files
        return (
            <div>
                <PageHeader title="My Files" />
                <div className={classes.tabsroot}  style={{maxWidth:860,margin:'20px auto',position:'relative'}}>
                    <CirLoading loading={loading.global}/>
                    <AppBar position="static" color="default">
                        <Tabs value={tabs} onChange={this.handleTabsChange} indicatorColor="primary" centered>
                            <Tab label="Images" />
                            <Tab label="Videos" />
                        </Tabs>
                    </AppBar>
                    { tabs===0 &&
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {filesList.filter((item)=>{return (item.type==='image/png' ||item.type==='image/jpeg' )}).map((item,index) =>{
                            return(
                                <GridListTile key={index} cols={1} className={style.gridItem}>
                                    <img src={item.path} style={{width:'100%',height:'100%'}} alt=""/>
                                    <div className={style.mask}>
                                        <div className={style.delete}><Icon type="delete" className={style.icon} onClick={()=>this.handleAlertOpen(index,item.id)}  /></div>
                                        <div className={style.more} ><Icon type="search" className={style.icon} onClick={()=>this.handleOpen(index)} /></div>
                                    </div>
                                    <Dialog open={alert[index]} onRequestClose={()=>this.handleAlertClose(index)}>
                                        <DialogTitle>{"Delete ？"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                ARE YOU SURE YOU DON'T NEED IT ANY MORE?<br/>
                                                （{item.name}）
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
                                        <DialogTitle>{item.name}</DialogTitle>
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
                        {filesList.filter((item)=>{return (item.type==='video/mp4' )}).map((item,index) =>{
                            return(
                                <GridListTile key={index} cols={1} className={style.gridItem}>
                                    <CardMedia
                                        style={{objectit:'fill',height:'100%'}}
                                        component="video"
                                        src={item.path}
                                        autoPlay
                                        muted
                                    />
                                    <div className={style.mask}>
                                        <div className={style.delete}><Icon type="delete" className={style.icon} onClick={()=>this.handleAlertOpen(index,item.id)}  /></div>
                                        <div className={style.more} ><Icon type="search" className={style.icon} onClick={()=>this.handleOpen(index)} /></div>
                                    </div>
                                    <Dialog open={alert[index]} onRequestClose={()=>this.handleAlertClose(index)}>
                                        <DialogTitle>{"Delete ？"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                ARE YOU SURE YOU DON'T NEED IT ANY MORE?<br/>
                                                （{item.name}）
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
                                        <DialogTitle>{item.name}</DialogTitle>
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
export default connect(({files,loading})=>({files,loading}))(withStyles(styles)(myFiles));
