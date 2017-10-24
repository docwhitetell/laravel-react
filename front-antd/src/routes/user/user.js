import React from 'react'
import UserTable from '../../components/usertable/index'

class User extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }

    render(){
        return(
            <div>
                <UserTable/>
            </div>
        )
    }

}
export default User