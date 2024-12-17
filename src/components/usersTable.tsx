import { Button, Table } from "antd";
import { userDataType } from "../types";

type TableProps ={
    editUserData: (record: userDataType) => void;
    showModal:()=>void;
    users:userDataType[]
}

function UsersTable({users,showModal,editUserData}:TableProps) {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Work Location",
      dataIndex: "workLocation",
      key: "workLocation",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: userDataType) => (
        <Button onClick={() => editUserData(record)}>Edit</Button>
      ),
    },
  ];

  return (
    <div>
      <div className="header flex justify-between items-center mb-5">
        <h1>Users Table</h1>
        <Button onClick={showModal}>Add</Button>
      </div>

      <Table dataSource={users} columns={columns} rowKey="key" />
    </div>
  )
}

export default UsersTable
