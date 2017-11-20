import React from 'react';
import { connect } from 'dva';
import {withStyles} from 'material-ui/styles'


import Header from './components/header'
import Banner from './components/banner'
import Service from './components/service'
import Footer from './components/footer'
import {Icon} from 'antd'

import Hidden from 'material-ui/Hidden'
import styles from './styles'



function Index({index,classes}) {
    function handleOnWheel(e) {
        console.log(e.deltaY)
    }

    return (
    <div className={classes.root}>
        <Header classes={classes}/>
        <Banner classes={classes}/>
        <Service classes={classes}/>
        <Footer classes={classes} />
    </div>
  );
}

Index.propTypes = {
};

export default connect(({index})=>({index}))(withStyles(styles)(Index));
