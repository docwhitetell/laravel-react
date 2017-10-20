import React from 'react'

import {Link} from 'react-router-dom'
import Layout from '../../components/material/layout/Layout'
import { Breadcrumb, Icon } from 'antd'
import UserTable from '../../components/material/components/usertable/UserTable'
import BreadCrumb from '../../components/material/components/BreadCrumb/BreadCrumb'
const User=()=>{
    const breadcrumbNameMap = [
        {
            path:'/',
            name:'App'
        } ,
        {
            path:'/dashboard',
            name:'Dashboard',
        },
        {
            path:'/user',
            name: 'user',
        }
    ];
    return(
        <Layout>
            <BreadCrumb data={breadcrumbNameMap}/>
            <UserTable/>
        </Layout>
    )
}
export default User