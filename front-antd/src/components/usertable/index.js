import React from 'react';
import {connect} from 'dva'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import keycode from 'keycode';
import Table, {
    TableBody,
    TableCell,
    TableFooter,
    TablePagination,
    TableRow,
} from 'material-ui/Table';

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import EnhancedTableToolbar from './tableToolBar'
import EnhancedTableHead from './tableHead'

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}


const styles = theme => ({
    root: {
        width: '96%',
        margin:'20px auto'
    },
    table: {
        width: '100%',
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [

            ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
            page: 1,
            rowsPerPage: 5,
        };
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';
        const {users,dispatch}=this.props
        if (users.orderBy === property && users.order === 'desc') {
            order = 'asc';
        }

        const data =
            order === 'desc'
                ? users.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : users.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        dispatch({
            type:'users/update',
            payload:{ data, order, orderBy }
        })
    };

    handleSelectAllClick = (event, checked) => {
        const {users,dispatch}=this.props
        if (checked) {
            dispatch({
                type:'users/update',
                payload:{ selected: users.data.map(n => n.id) }
            })
            //this.setState({ selected: this.state.data.map(n => n.id) });
        }else{
            dispatch({
                type:'users/update',
                payload:{ selected:  []  }
            })
        }

    };

    handleKeyDown = (event, id) => {
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
    };

    handleClick = (event, id) => {
        const {users,dispatch}=this.props
        const { selected } = users;
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
            type:'users/update',
            payload:{ selected: newSelected }
        })
        this.setState({ selected: newSelected });
    };

    handleChangePage = (event, page) => {
        const {users,dispatch}=this.props
        console.log(page)
        console.log(users.page)
        let newState;
        if(page+1<=users.last_page){
            newState={
                page:page+1,rowsPerPage:users.rowsPerPage
            }
        }else{
            newState={
                page:page,rowsPerPage:users.rowsPerPage
            }
        }
        dispatch({
            type:'users/getUserList',
            payload:newState
        })
    };

    handleChangeRowsPerPage = event => {
        const {dispatch } = this.props;
        //this.setState({ rowsPerPage: event.target.value });
        const newSize={rowsPerPage:event.target.value,page:1}
        dispatch({
            type:'users/changeRowsPerPage',
            payload:newSize
        })
    };

    isSelected = id => this.props.users.selected.indexOf(id) !== -1;

    render() {
        const {users,dispatch, classes } = this.props;
        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar numSelected={users.selected.length} />
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <EnhancedTableHead
                            numSelected={users.selected.length}
                            order={users.order}
                            orderBy={users.orderBy}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={users.total}
                        />
                        <TableBody>
                            {users.data.map(n => {
                                const isSelected = this.isSelected(n.id);
                                return (
                                    <TableRow
                                        hover
                                        onClick={event => this.handleClick(event, n.id)}
                                        onKeyDown={event => this.handleKeyDown(event, n.id)}
                                        role="checkbox"
                                        aria-checked={isSelected}
                                        tabIndex={-1}
                                        key={n.id}
                                        selected={isSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isSelected} />
                                        </TableCell>
                                        <TableCell numeric padding="none">{n.id}</TableCell>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell>{n.email}</TableCell>
                                        <TableCell>{n.created_at}</TableCell>
                                        <TableCell>delete</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={users.total}
                                    rowsPerPage={users.rowsPerPage}
                                    page={users.page-1}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(({users})=>({users}))(withStyles(styles)(EnhancedTable));