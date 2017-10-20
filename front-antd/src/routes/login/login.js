/*
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import LoginFromWrapper from '../../components/LoginForm/LoginForm'
import styles from './login.css';

const Login=({dispatch,hasLogin})=>{
    console.log(hasLogin.login)
    function doLogin({dispatch,values}){
        dispatch({ type: 'login/login', payload: values })
    }
    const props={}
    props.onSubmit=doLogin

    return (
        <div className={styles.wrapper} >
            <LoginFromWrapper {...props}   />
        </div>
    );
}

export default connect((hasLogin)=>({hasLogin}))(Login);*/


import React from 'react'
import { connect } from 'dva';
import LoginForm from '../../components/login/login'
const login=()=>{
    return (
        <div style={{width:'100%',height:'100%'}}>
            <LoginForm/>
        </div>

    )
}

export default login