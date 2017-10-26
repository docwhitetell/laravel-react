import React from 'react'
import Table from '../../components/table/index'
import {connect} from 'dva'
import keycode from 'keycode';
import {
    TableCell,
    TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit'
const List =({notes,loading,dispatch})=>{

    function handleSelectAllClick(event, checked) {
        if (checked) {
            dispatch({
                type:'notes/update',
                payload:{ selected: notes.data.map(n => n.id) }
            })
        }else{
            dispatch({
                type:'notes/update',
                payload:{ selected:  []  }
            })
        }
    }
    function handleRequestSort(event, property) {
        const orderBy = property;
        let order = 'desc';
        if (notes.orderBy === property && notes.order === 'desc') {
            order = 'asc';
        }
        const data =
            order === 'desc'
                ? notes.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : notes.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        dispatch({
            type:'notes/update',
            payload:{ data, order, orderBy }
        })
    }
    function handleKeyDown(event, id) {
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
    }
    function handleClick(event, id) {
        const { selected } = notes;
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
            type:'notes/update',
            payload:{ selected: newSelected }
        })
    }
     function handleChangePage(event, page)  {
         let newState;
         if(page+1<=notes.last_page){
             newState={
                 page:page+1,rowsPerPage:notes.rowsPerPage
             }
         }else{
             newState={
                 page:page,rowsPerPage:notes.rowsPerPage
             }
         }
         dispatch({
             type:'notes/getUserList',
             payload:newState
         })
     }
     function handleChangeRowsPerPage(event) {
         const newSize={rowsPerPage:event.target.value,page:1}
         dispatch({
             type:'notes/changeRowsPerPage',
             payload:newSize
         })
     }
   /*  handleDialogOpenOrHide=()=>{
        const {dispatch}=this.props
        dispatch({
            type:'notes/showOrHideDialog'
        })
    }*/

    function isSelected(id) {
        return notes.selected.indexOf(id) !== -1;
    }
    function handleSelectedAction(){
        const {notes,dispatch}=this.props
        dispatch({
            type:'notes/deleteUser',
            payload:notes.selected
        })
    }
    function handleEmptyAction(){

    }

    const handleEdit=(id)=>{
        console.log(id)
        dispatch({
            type:'notes/edit',
            payload:id
        })
    }

    const props={}
    props.table=notes
    props.column=notes.column
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


    return(<div>
        <Table {...props}>
            {notes.data.map(n => {
                const Selected = isSelected(n.id);
                return (
                    <TableRow
                        hover
                        onClick={event =>handleClick(event, n.id)}
                        onKeyDown={event => handleKeyDown(event, n.id)}
                        role="checkbox"
                        aria-checked={Selected}
                        tabIndex={-1}
                        key={n.id}
                        selected={Selected}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox checked={Selected} />
                        </TableCell>
                        <TableCell numeric padding="none">{n.id}</TableCell>
                        <TableCell>{n.title}</TableCell>
                        <TableCell>{n.content}</TableCell>
                        <TableCell>{n.created_at}</TableCell>
                        <TableCell>
                            <IconButton aria-label="Edit" color="primary" onClick={()=>{handleEdit(n.id)}}>
                                <EditIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                );
            })}
        </Table>

    </div>)
}

export default connect(({notes,loading})=>({notes,loading}))(List)