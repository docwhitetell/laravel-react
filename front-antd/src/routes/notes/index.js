import React from 'react'
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
import AddIcon from 'material-ui-icons/Add';
import styles from './style.css'

const List =({app,notes,loading,dispatch})=>{

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
        dispatch({
            type:'notes/deleteNote',
            payload:notes.selected
        })
    }
    function handleEmptyAction(){

    }

    function handleAddNote() {
        dispatch({
            type:'notes/create'
        })
    }
    const handleEdit=(id)=>{
        console.log(id)
        dispatch({
            type:'notes/edit',
            payload:id
        })
    }

    const props={}
    props.theme=app.currentTheme
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


    return(<div style={{padding:20}}>
        <div style={{marginBottom:10,textAlign:'right'}}>
            <Button fab raised color="primary"  onClick={handleAddNote}>
                <AddIcon />
            </Button>
        </div>

        <Table {...props}>
            {notes.data.map(n => {
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
                        <TableCell className={styles.tableCell}>{n.title}</TableCell>
                        <TableCell className={styles.tableCell}>{n.content}</TableCell>
                        <TableCell className={styles.tableCell}>{n.created_at}</TableCell>
                        <TableCell className={styles.tableCell}>{n.updated_at}</TableCell>
                        <TableCell className={styles.tableCell}>
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

export default connect(({app,notes,loading})=>({app,notes,loading}))(List)