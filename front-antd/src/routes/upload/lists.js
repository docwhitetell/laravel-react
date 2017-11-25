import React from 'react'
import {connect} from 'dva'
import AntdTable from '../../components/table/antdTable'
const columns = [{
    title: 'Resource Name',
    dataIndex: 'original_name',
}, {
    title: 'Resource Link',
    dataIndex: 'path',
}, {
    title: 'Resource Thumb',
    render: (text, record) => (
        <span>
      <img src={record.path} width={100} height={60} alt=""/>
    </span>
    ),
}
];

//{files,dispatch}
class Lists extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    componentDidUpdate(){
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    handleTablePageChange=(pagination,filters, sorter)=>{
        const {files,dispatch}=this.props
        if(pagination.current===files.filesPagination.current){
        }else{
            dispatch({
                type:'files/query',
                payload:{page:pagination.current,pageSize:pagination.pageSize}
            })
        }
    }
    render(){
        const {files}=this.props
        return(
            <div style={{marginTop:-68}}>
                <div style={{padding:20}}>
                    <AntdTable
                        size="default"
                        data={files.filesList}
                        columns={columns}
                        pagination={files.filesPagination}
                        handleChange={this.handleTablePageChange}
                    />
                </div>

            </div>
        )
    }

}
export default connect(({app,files})=>({app,files}))(Lists)