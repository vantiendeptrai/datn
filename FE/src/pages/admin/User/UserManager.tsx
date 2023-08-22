import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/Table";

// import { useGetAllUserQuery } from "../../../api/auth";
// import { IUser } from "../../../interface";



const UserManager = () => {
  const dataSource = [
  {
    key: '1',
    name: 'Mike',
    email: 'mike@gmail.com',
    role: 'User',
  },
  {
    key: '2',
    name: 'John',
    email: 'mike@gmail.com',
    role: 'User',
  },
];

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (role) => (
      <>
        {role === "Admin" ? (
          <Tag color="red">{role.toUpperCase()}</Tag>
        ) : (
          <Tag color="blue">{role.toUpperCase()}</Tag>
        )}
      </>
    ),
  },
];
  // const { data, isLoading } = useGetAllUserQuery();
  // const dataUser = data?.data;

//   return (
//   //   <>
//   //     <Table
//   //       columns={columns}
//   //       dataSource={data && dataUser}
//   //       rowKey="_id"
//   //       bordered
//   //       size="middle"
//   //       loading={isLoading}
//   //       tableLayout="auto"
//   //     />
//   //   </>
//   // );
// };

 return <Table dataSource={dataSource} columns={columns} />;
}
export default UserManager;
