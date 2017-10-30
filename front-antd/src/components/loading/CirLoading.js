import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import classNames from 'classnames'
const styles = theme => ({
    loading:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        background:'rgba(0,0,0,0.14)',
        zIndex:1000,
        opacity:1
    },
    progress: {
        position:'absolute',
        top:'50%',left:'50%',
        transform:'translate(-50%,-40%)',
        zIndex:10
    },
    progressFixed:{
        position:'fixed !important',
    },
    text: {
        position:'absolute',
        top:'50%',left:'50%',
        transform:'translate(-50%,30px)',
        color:theme.palette.primary,
        fontSize:'16px',
        zIndex:10
    },
    mask:{
        position:'absolute',
        width:'100%',
        height:'100%',
        background:'rgba(255,255,255,0.8)',
        filter:'blur(4px)'
    },
    hidden:{
        zIndex: -1,
        opacity: 0,
        transition:'opacity 1s ease 0.5s ,z-index 0.1s ease 1.5s',
    }
});

function CirLoading(props) {
    const {loading, classes,fixed } = props;
    return (
        <div className={classNames(classes.loading, {
            [classes.hidden]: !loading,
        })} id="loading">
            <CircularProgress className={classNames(classes.progress,{
                [classes.progressFixed]:fixed
            })} color="primary" size={50} />
            <p className={classNames(classes.text,{
                [classes.progressFixed]:fixed
            })}>Loading</p>
            <div className={classNames(classes.mask,{
                [classes.progressFixed]:fixed
            })}></div>
        </div>
    );
}

CirLoading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CirLoading);