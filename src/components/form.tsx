import { Form, Input, Select } from "antd";
import React from "react";

type Inputs = {
  key?: number;
  name: string;
  workLocation: string;
};

type FormProps = {
  form: any;
  userData: Inputs|undefined;
  onFinish: (values: Inputs) => void;
};

const UserForm: React.FC<FormProps> = ({ form, onFinish }) => {
 

  return (
    <div className="form-container">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="User Name"
          name="name"
          rules={[{ required: true, message: "User name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Work Location"
          name="workLocation"
          rules={[{ required: true, message: "Work location is required" }]}
        >
          <Select placeholder="Select work location">
            <Select.Option value="Home">Home</Select.Option>
            <Select.Option value="Office">Office</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
