import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import {Link} from 'react-router-dom'
import HomeIcon from 'material-ui-icons/Home'
export default class BreadCrumb extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        const data=this.props.data
        return (
            <div style={{position:'relative'}}>
                <HomeIcon style={{position:'absolute',top:6}}/>
                <Breadcrumb style={{marginTop:10,marginLeft:32,marginBottom:20,display:'inline-block'}}>
                    {
                        data.map((item,key)=><Breadcrumb.Item key={key}>
                            <Link to={item.path}>{item.name}</Link>
                        </Breadcrumb.Item>)
                    }
                </Breadcrumb>
            </div>

        )
    }
}