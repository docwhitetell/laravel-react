import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const toolbarStyles = theme => ({
    root: {
        paddingRight: 2,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.A700,
                backgroundColor: theme.palette.secondary.A100,
            }
            : {
                color: theme.palette.secondary.A100,
                backgroundColor: theme.palette.secondary.A700,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});

let EnhancedTableToolbar = props => {
    const {table,handleSelectedAction,handleEmptyAction, classes } = props;


    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: table.selected.length > 0,
            })}
        >
       {/*     <div className={classes.title} style={{marginRight:20}}>
                <Button fab color="accent" aria-label="add" className={classes.button} style={{width:'44px',height:'44px'}} onClick={userAdd}>
                    <AddIcon />
                </Button>
            </div>*/}
            <div className={classes.title}>
                {table.selected.length > 0 ? (
                    <Typography type="subheading">{table.selected.length} selected</Typography>
                ) : (
                    <Typography type="title">{table.title}</Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions} >
                {table.selected.length > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete" onClick={handleSelectedAction}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="Filter list" onClick={handleEmptyAction}>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {

};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);