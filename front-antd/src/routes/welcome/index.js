import React from 'react';
import { connect } from 'dva';
import {Link} from 'react-router-dom'
import styles from './index.css';
import axios from 'axios'
import Button from 'material-ui/Button'
function Index() {

    return (
    <div className={styles.normal}>
            <div className={styles.bgImg}/>
            <h1 className={styles.title}>Doc.white</h1>
            <p className={styles.description}>Power By </p>
            <p className={styles.description}>Google's Material-Ui &nbsp;, Antd , &nbsp;Laravel ! </p>
            <Button raised href="/login">
                Enter!
            </Button>
    </div>
  );
}

Index.propTypes = {
};

export default connect()(Index);
