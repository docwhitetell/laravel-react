import React from 'react'
import {connect} from 'dva'
import Card, {CardHeader} from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import styles from './login.css'
const LoginForm = ({dispatch}) => {
    const state = {
        email: "",
        password: "",
        remember: false,
        domain: 'localhost:8000'
    }
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
        const url = e.target.getAttribute('action')
        dispatch({
            type: 'login/login',
            payload: state
        })
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

export default connect(({ dispatch}) => ({ dispatch}))(LoginForm)