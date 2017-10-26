import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
    TableBody,
    TableFooter,
    TablePagination,
    TableRow,
} from 'material-ui/Table';

import Paper from 'material-ui/Paper';


import RegisterForm from '../registerform/RegisterForm'
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

import EnhancedTableToolbar from './tableToolBar'
import EnhancedTableHead from './tableHead'

import CirLoading from '../loading/CirLoading'
let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}


const styles = theme => ({
    root: {
        width: '96%',
        margin:'20px auto',
        position:'relative'
    },
    table: {
        width: '100%',
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    tbody:{
       /* minHeight:400,*/
    },
});

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'asc',
            orderBy: 'calories',
        };
    }


    render() {
        const {table,loading,handleSelectAllClick,
            handleRequestSort,children,
            handleChangePage,handleChangeRowsPerPage,handleSelectedAction,handleEmptyAction,
            dispatch, classes
        } = this.props;


        const props={}
        props.table=table
        props.handleSelectedAction=handleSelectedAction
        props.handleEmptyAction=handleEmptyAction
        props.dispatch=dispatch
        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar {...props}/>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <EnhancedTableHead
                            numSelected={table.selected.length}
                            order={this.state.order}
                            orderBy={this.state.orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={table.total}
                            columnData={table.column}
                        />
                        <TableBody className={classes.tbody}>
                            {children}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={table.total}
                                    rowsPerPage={table.rowsPerPage}
                                    page={table.page-1}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>

                <CirLoading loading={loading.global}/>
             {/*   <Dialog open={table.dialogopen} onRequestClose={handleDialogOpenOrHide} className={classes.dialog}>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogContent>
                        <RegisterForm/>
                    </DialogContent>
                </Dialog>*/}
            </Paper>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);