import React from 'react'
import {connect} from 'dva'
import Card, {CardHeader} from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import styles from './login.css'
import axios from 'axios'
import Cookies from 'js-cookie'
const LoginForm=({app,login,dispatch})=>{
    const state={
        email:"",
        password:"",
        remember:false,
        domain:'localhost:8000'
    }
    const handleInputOnchange=(e)=>{
        const inputType=e.target.getAttribute('name')
        switch (inputType){
            case 'email':
                state.email=e.target.value
                break
            case 'password':
                state.password=e.target.value
                break
            case 'remember':
                state.remember=!state.remember
                break
            default:
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const url=e.target.getAttribute('action')
        //const data=new FormData()
        //data.append('email',state.email)
        //data.append('password',state.password)
        dispatch({
            type:'login/login',
            payload:state
        })
     /*   axios({
            url:url,
            method:'post',
            data:state
        }).then(res=>{
            console.log(res)
            Cookies.set('access_token', res.data.access_token, { expires: 7, path: '/' });
            Cookies.set('refresh_token', res.data.refresh_token, { expires: 7, path: '/' });
            Cookies.set('expires_in', res.data.expires_in, { expires: 7, path: '/' });
          dispatch({
              type:'login/loginSuccess'
          })
        })*/
    }
    const queryUser=()=>{
        if(Cookies('access_token')){
            axios({
                url:'http://mylaravel.com/api/current-user',
                method:'get',
                headers: {
                    'Accept':'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization':'Bearer '+Cookies('access_token')
                },
            }).then(res=>{
                console.log(res)
                dispatch({
                    type:'app/currentUser',
                    payload:res.data
                })
            })
        }
    }
    return (
        <div className={styles.pageWrapper}>
            <Card className={styles.loginWrapper}>
                <CardHeader
                    title="Login"
                />
                <form action="http://mylaravel.com/api/login" onSubmit={handleSubmit}>
                    <TextField
                        className={styles.formfield}
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        onChange={handleInputOnchange}
                        fullWidth
                    />
                    <TextField
                        className={styles.formfield}
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleInputOnchange}
                        fullWidth
                    />
                    <p>
                        <span className={styles.remember}>Remember ?</span>
                        <Checkbox
                        name="remember"
                        onChange={handleInputOnchange}
                    />
                    </p>

                    <Button type="submit" raised color="accent" className={styles.submitButton}>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default connect(({app,login,dispatch})=>({app,login,dispatch}))(LoginForm)