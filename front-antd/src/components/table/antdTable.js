import { Table } from 'antd';

const columns = [{
    title: 'Rank',
    dataIndex: 'id',
    sorter: (a,b)=>a.id-b.id,
}, {
    title: 'Key Word',
    dataIndex: 'word',
}, {
    title: 'User Number',
    dataIndex: 'userNumber',
    sorter:(a,b)=>a.userNumber-b.userNumber,
}, {
    title: 'Rose',
    dataIndex: 'rose',
    sorter:(a,b)=>a.rose-b.rose,
    render: rose => `${rose} %`,
}
];

const AntdTable=({data,pagination,handleChange})=>{
        return (
            <Table columns={columns}
                   rowKey={record => record.id}
                   dataSource={data}
                   pagination={pagination}
                   onChange={handleChange}
                   bordered
            />
        );

}

export default AntdTable