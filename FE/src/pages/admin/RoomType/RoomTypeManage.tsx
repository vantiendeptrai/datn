import { Button, Popconfirm, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/Table";
const RoomTypeManage = () => {
  const dataSource = [
  {
    key: '1',
    name: 'phòng đơn',
   
  },
  {
    key: '2',
    name: 'phòng đôi',
   
  },
];

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
   {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button >edit</Button>
                        <Button >Delete</Button>
                         </Space>
            ),
        },
  
];
  return <>
  <Button>them</Button>
  <Table dataSource={dataSource} columns={columns} />;
  </>;
}
export default RoomTypeManage;
