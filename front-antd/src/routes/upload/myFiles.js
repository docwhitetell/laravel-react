import React from 'react'
import {connect} from 'dva'
import Dialog,{DialogTitle, DialogContent,DialogContentText,} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import {Icon} from 'antd'
import style from './myfiles.css'
const styles = theme => ({

    gridList: {
        width: '80%',
        height: 'auto',
        margin:'40px auto 0 auto !important'
    },
    subheader: {
        width: '100%',
    },
});
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
    }
    render(){
        const {files,open,classes}=this.props
        const {filesList}=files
        console.log(open)
        return (
            <div>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {filesList.map((item,index) =>{
                        return(
                            <GridListTile key={index} cols={1} className={style.gridItem}>
                                <img src={item.path} />
                                <div className={style.mask}>
                                    <div className={style.delete}><Icon type="delete" className={style.icon} /></div>
                                    <div className={style.more} ><Icon type="search" className={style.icon} /></div>
                                </div>
                               {/* <Dialog open={open[index]} onRequestClose={this.handleRequestClose(index)}>
                                    <DialogTitle>Subscribe</DialogTitle>

                                </Dialog>*/}
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div>
        )
    }

}
export default connect(({files})=>({files}))(withStyles(styles)(myFiles));
