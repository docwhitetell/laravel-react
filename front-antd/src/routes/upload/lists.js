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
const Lists=({files,dispatch})=>{
    function handleTablePageChange(pagination,filters, sorter) {
        if(pagination.current===files.filesPagination.current){
        }else{
            dispatch({
                type:'files/query',
                payload:{page:pagination.current,pageSize:pagination.pageSize}
            })
        }
    }
    return(
        <div>
            <div style={{padding:20}}>
                <AntdTable
                    size="default"
                    data={files.filesList}
                    columns={columns}
                    pagination={files.filesPagination}
                    handleChange={handleTablePageChange}
                />
            </div>

        </div>
    )
}
export default connect(({files})=>({files}))(Lists)