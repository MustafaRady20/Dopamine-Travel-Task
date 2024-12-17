import { Button, Table, Modal, Form } from "antd";
import { useState } from "react";
import UserForm from "../components/form"; 

type UsersData = {
  key: number;
  name: string;
  workLocation: string;
}[];

const usersData: UsersData = [
  { key: 1, name: "mohamed", workLocation: "Home" },
  { key: 2, name: "mostafa", workLocation: "Home" },
];

type userDataType = {
  key?: number;
  name: string;
  workLocation: string;
};

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<userDataType>();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [users, setUsers] = useState(usersData);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const editUserData = (userData: userDataType) => {
    setIsEditing(true);
    setUserData(userData);
    form.setFieldsValue(userData);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();  
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    form.resetFields(); 
  };

  const handleFormSubmit = (values: userDataType) => {
    if (isEditing) {
      const updatedUsers = users.map((user) =>
        user.key === userData?.key ? { ...user, ...values } : user
      );
      setUsers(updatedUsers);
    } else {
      const newUser = { ...values, key: Date.now() }; 
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
    setIsEditing(false);
  };

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
      <Modal
        title={isEditing ? "Edit User" : "Add New User"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <UserForm
          form={form}
          onFinish={handleFormSubmit}
          userData={userData}
        />
      </Modal>

      <div className="header flex justify-between items-center mb-5">
        <h1>Users Table</h1>
        <Button onClick={showModal}>Add</Button>
      </div>

      <Table dataSource={users} columns={columns} rowKey="key" />
    </div>
  );
};

export default Users;
