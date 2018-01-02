import React from 'react'
import {connect} from 'dva'
import {withStyles} from 'material-ui/styles'
import Card, {CardHeader} from 'material-ui/Card';
import pink from 'material-ui/colors/pink'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import styles from './styles'
import {message} from 'antd'


const LoginForm = ({dispatch,classes}) => {
    const state = {
        email: "",
        password: "",
        remember: false,
        domain: 'localhost:8000'
    }
    const csrf_token=document.getElementsByTagName('meta')['csrf-token'].getAttribute('content')
    console.log(csrf_token)
    const handleInputOnchange = (e) => {
        const inputType = e.target.getAttribute('name')
        switch (inputType) {
            case 'email':
                state.email = e.target.value
                break
            case 'password':
                state.password = e.target.value
                break
            case 'remember':
                state.remember = !state.remember
                break
            default:
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        message.loading('Loging!')
        const url = e.target.getAttribute('action')
        dispatch({
            type: 'login/login',
            payload: state
        })
    }
    return (
            <Card className={classes.loginWrapper}>
                <h1 style={{fontWeight:300,color:'#ffffff',fontSize:'24px'}}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="dense"
                        id="csrf_token"
                        name="csrf_token"
                        value={csrf_token}
                        type="hidden"
                    />
                    <TextField
                        className={classes.formfield}
                        InputClassName={classes.textfieldInput}
                        labelClassName={classes.textfieldLabel}
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        onChange={handleInputOnchange}
                        fullWidth
                    />
                    <TextField
                        className={classes.formfield}
                        InputClassName={classes.textfieldInput}
                        labelClassName={classes.textfieldLabel}
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleInputOnchange}
                        fullWidth
                    />
                    <p>
                        <span className={classes.remember}>Remember ?</span>
                        <Checkbox
                            name="remember"
                            classes={{checked:classes.checked}}
                            onChange={handleInputOnchange}
                        />
                    </p>
                    <p style={{position:'absolute',bottom:0,width:'100%',left:0}}>
                        <span style={{textAlign:'center',display:'block',width:'100%',fontWeight:600,color:'#ffffff'}}><strong>example@react.com </strong>&nbsp;&nbsp;&nbsp;<strong>123456</strong></span>
                    </p>
                    <Button type="submit" className={classes.submitButton}>
                        Login
                    </Button>
                </form>
            </Card>
    )
}

export default connect(({ dispatch}) => ({ dispatch}))(withStyles(styles)(LoginForm))