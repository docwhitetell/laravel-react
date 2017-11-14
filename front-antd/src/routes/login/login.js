
import React from 'react'
import { connect } from 'dva';
import LoginForm from './components/login'
const login=()=>{
    return (
        <div style={{width:'100%',height:'100%'}}>
            <LoginForm/>
        </div>

    )
}

export default login