import {  Modal, Form } from "antd";
import { useState } from "react";
import UserForm from "../components/form"; 
import { userDataType } from "../types";
import UsersTable from "../components/usersTable";


const usersData: userDataType[] = [
  { key: 1, name: "mohamed", workLocation: "Home" },
  { key: 2, name: "mostafa", workLocation: "Home" },
];



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
      <UsersTable showModal={showModal} editUserData={editUserData} users={users}/>
    </div>
  );
};

export default Users;
