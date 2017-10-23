import React from 'react'
import UserTable from '../../components/usertable/index'

const User=({users,dispatch})=>{
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
        <div>
            <UserTable/>
        </div>
    )
}
export default User