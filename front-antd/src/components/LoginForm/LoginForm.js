import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './LoginForm.css'
import Cookies from 'js-cookie'

import axios from 'axios'
const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const userdata=new FormData();
                userdata.append('email',values.email)
                userdata.append('password',values.password)

                const action=this.props.onSubmit
                console.log(action)
                axios({
                    url:'http://mylaravel.com/api/login',
                    method:'post',
                    //headers: {'X-Requested-With': 'XMLHttpRequest'},
                    data:userdata
                }).then(function (response) {
                    console.log(response);
                    Cookies.set('access_token', response.data.access_token, { expires: 7, path: '/' });
                    Cookies.set('refresh_token', response.data.refresh_token, { expires: 7, path: '/' });
                    Cookies.set('expires_in', response.data.expires_in, { expires: 7, path: '/' });
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
                        Cookies.set('user_id', res.data.id, { expires: 7, path: '/' });
                        Cookies.set('user_name', res.data.name, { expires: 7, path: '/' });
                        Cookies.set('user_email', res.data.email, { expires: 7, path: '/' });
                        window.location.href='http://localhost:8000'
                    })

                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    }
    constructor(props) {
        super(props);
    }
    checkLogin=()=>{
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
                Cookies.set('user_id', res.data.id, { expires: 7, path: '/' });
                Cookies.set('user_name', res.data.name, { expires: 7, path: '/' });
                Cookies.set('user_email', res.data.email, { expires: 7, path: '/' });
                window.location.href='http://localhost:8000/dashboard'
            })
        }

    }
    componentWillMount(){
        console.log('before?')
        this.checkLogin()
    }

    render()
    {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={styles.loginForm} autoComplete={false}>
                <h2 style={{textAlign:'center',marginBottom:'20px',color:'#424242',fontSize:'24px'}}>Laravel & React</h2>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input  prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Eamil"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}

                    <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const LoginFormWrapper = Form.create()(LoginForm);

export default LoginFormWrapper