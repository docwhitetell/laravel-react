import React from 'react'
import {withStyles} from 'material-ui/styles'
import Table from '../../components/table/index'
import {connect} from 'dva'
import keycode from 'keycode';
import Button from 'material-ui/Button';
import {
    TableCell,
    TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit'

import styles from './styles'

const List =({app,blogs,loading,dispatch,classes})=>{

    function handleSelectAllClick(event, checked) {
        if (checked) {
            dispatch({
                type:'blogs/update',
                payload:{ selected: blogs.data.map(n => n.id) }
            })
        }else{
            dispatch({
                type:'blogs/update',
                payload:{ selected:  []  }
            })
        }
    }
    function handleRequestSort(event, property) {
        const orderBy = property;
        let order = 'desc';
        if (blogs.orderBy === property && blogs.order === 'desc') {
            order = 'asc';
        }
        const data =
            order === 'desc'
                ? blogs.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : blogs.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        dispatch({
            type:'blogs/update',
            payload:{ data, order, orderBy }
        })
    }
    function handleKeyDown(event, id) {
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
    }
    function handleClick(event, id) {
        const { selected } = blogs;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        dispatch({
            type:'blogs/update',
            payload:{ selected: newSelected }
        })
    }
     function handleChangePage(event, page)  {
         let newState;
         if(page+1<=blogs.last_page){
             newState={
                 page:page+1,rowsPerPage:blogs.rowsPerPage
             }
         }else{
             newState={
                 page:page,rowsPerPage:blogs.rowsPerPage
             }
         }
         dispatch({
             type:'blogs/getUserList',
             payload:newState
         })
     }
     function handleChangeRowsPerPage(event) {
         const newSize={rowsPerPage:event.target.value,page:1}
         dispatch({
             type:'blogs/changeRowsPerPage',
             payload:newSize
         })
     }
   /*  handleDialogOpenOrHide=()=>{
        const {dispatch}=this.props
        dispatch({
            type:'blogs/showOrHideDialog'
        })
    }*/

    function isSelected(id) {
        return blogs.selected.indexOf(id) !== -1;
    }
    function handleSelectedAction(){
        dispatch({
            type:'blogs/deleteBlog',
            payload:blogs.selected
        })
    }
    function handleEmptyAction(){

    }

    function handleCreateBlog() {
        dispatch({
            type:'blogs/create'
        })
    }
    const handleEdit=(id)=>{
        console.log(id)
        dispatch({
            type:'blogs/edit',
            payload:id
        })
    }

    const props={}
    props.theme=app.currentTheme
    props.table=blogs
    props.column=blogs.column
    props.loading=loading
    props.dispatch=dispatch

    /*全选点击事件*/
    props.handleSelectAllClick=handleSelectAllClick
    /*排序事件*/
    props.handleRequestSort=handleRequestSort
    /*翻页事件*/
    props.handleChangePage=handleChangePage
    /*改变每页行数*/
    props.handleChangeRowsPerPage=handleChangeRowsPerPage
    /*选择后的toolbar事件*/
    props.handleSelectedAction=handleSelectedAction
    /*每页选择的toolbar事件*/
    props.handleEmptyAction=handleEmptyAction


    return(
        <div style={{marginTop:-68}}>
            <div style={{width:'90%',margin:'20px auto 10px auto'}}>
                <Table {...props}>
                    {blogs.data.map(n => {
                        const Selected = isSelected(n.id);
                        return (
                            <TableRow
                                hover
                                onKeyDown={event => handleKeyDown(event, n.id)}
                                role="checkbox"
                                aria-checked={Selected}
                                tabIndex={-1}
                                key={n.id}
                                selected={Selected}
                            >
                                <TableCell onClick={event =>handleClick(event, n.id)} padding="checkbox">
                                    <Checkbox checked={Selected} />
                                </TableCell>
                                <TableCell numeric padding="none">{n.id}</TableCell>
                                <TableCell className={classes.tableCell}>{n.title}</TableCell>
                                <TableCell className={classes.tableCell}>{n.content}</TableCell>
                                <TableCell className={classes.tableCell}>{n.created_at}</TableCell>
                                <TableCell className={classes.tableCell}>{n.updated_at}</TableCell>
                                <TableCell className={classes.tableCell}>
                                    <IconButton aria-label="Edit" color="primary" onClick={()=>{handleEdit(n.id)}}>
                                        <EditIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </Table>
            </div>

            <div style={{width:'90%',margin:'10px auto'}}>
                <Button raised color="primary" onClick={handleCreateBlog} style={{width:'100%'}}>
                    New Blog
                </Button>
            </div>
    </div>)
}

export default connect(({app,blogs,loading})=>({app,blogs,loading}))(withStyles(styles)(List))