import React from 'react'
import { Table } from 'antd';
import {connect} from 'dva'
import styles from './UserTable.css'
import axios from 'axios';
import Cookies from 'js-cookie'
import config from '../../utils/config'
import Button from 'material-ui/Button';
import {  CircularProgress } from 'material-ui/Progress';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

import RegisterForm from '../registerform/RegisterForm'
class UserTable extends React.Component{
    constructor(props){
        super(props)
    }
    handleDialogOpenOrHide=()=>{
        const {dispatch}=this.props
        dispatch({
            type:'users/showOrHideDialog'
        })
    }
    handleDialogSubmit=(data)=>{
        const {dispatch}=this.props
        dispatch({
            type:'users/showOrHideDialog',
            payload:data
        })
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.props.users.pagination };
        pager.current = pagination.current;
        const {dispatch}=this.props
        dispatch({
            type:'users/getUserList',
            payload:pager
        })
    }
    componentDidMount() {
        this.getUser()
    }
    deleteUser=(href)=>{
        const {users,dispatch}=this.props
        const current=users.pagination.current
        dispatch({
            type:'users/deleteUser',
            payload:{href,current}
        })
    }
    getUser=()=>{
        const {dispatch}=this.props
        dispatch({type:'users/getUserList'})
    }

    render(){
        const columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '20%',
        }, {
            title: 'Email',
            dataIndex: 'email',
            width: '20%',
        } ,{
            title: 'created_at',
            dataIndex: 'created_at',
            width: '20%',
        }, {
            title: 'Action',
            dataIndex: '',
            width: '20%',
            render: (item) => {
                return (
                    <div>
                        <a onClick={
                            (e)=>{
                                e.preventDefault();
                                const link=e.target.getAttribute('href')
                                this.deleteUser(link)
                            }
                        }  href={config.api.deleteUser+item.id}>Delete</a>
                    </div>
                )
            }
        }
        ];
        const classes=styles
        const {users}=this.props
        return(
            <div className={classes.usertable}>
                <Button raised color="accent" className={classes.addButton} onClick={this.handleDialogOpenOrHide}>
                    Add User
                </Button>
                <Dialog open={users.dialogopen} onRequestClose={this.handleDialogOpenOrHide} className={classes.dialog}>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogContent>
                        <RegisterForm/>
                    </DialogContent>
                    {  users.dialogLoading && <div className={classes.mask}><CircularProgress color="accent" className={classes.progress} /></div>}
                </Dialog>

                <Table columns={columns}
                       rowKey={record => record.id}
                       dataSource={users.user_data}
                       pagination={users.pagination}
                       loading={users.loading}
                       onChange={this.handleTableChange}
                       style={{boxShadow:'0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',marginTop:0}}
                />
            </div>)
    }

}
export default connect(({users,dispatch})=>({users,dispatch}))(UserTable)