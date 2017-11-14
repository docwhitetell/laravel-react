import { Table } from 'antd';


const AntdTable=({data,columns,pagination,size,handleChange})=>{
        return (
            <Table columns={columns}
                   rowKey={record => record.id}
                   dataSource={data}
                   pagination={pagination}
                   onChange={handleChange}
                   bordered
                   size={size}
            />
        );

}

export default AntdTable