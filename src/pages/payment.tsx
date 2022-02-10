import React from "react";
import { Steps, Form, Input, Button } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  DollarOutlined,
  PhoneOutlined,
  LockOutlined,
  MailFilled,
} from "@ant-design/icons";

const { Step } = Steps;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 8, offset: 0 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Payment = () => {
  return (
    <div>
      <div>
        <Steps>
          <Step status="finish" title="LOGIN" icon={<UserOutlined />} />
          <Step
            status="process"
            title="PAYMENT"
            icon={<ShoppingCartOutlined />}
          />
          <Step status="wait" title="VOUCHER" icon={<GiftOutlined />} />
          <Step status="wait" title="PLACE ORDER" icon={<DollarOutlined />} />
        </Steps>
      </div>
      <h2>Select a shipping address</h2>
      <h4>
        Please enter a shipping address for this order. Please also indicate
        whether your billing address is the same as the shipping address
        entered. When finished, click the "Continue" button. Or, if you're
        sending items to more than one address, click the "Add another address"
        button to enter additional addresses.
      </h4>
      <Form
        {...formItemLayout}
        name="register"
        labelAlign="left"
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label="User name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your user name!",
              whitespace: true,
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Enter user name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input prefix={<MailFilled />} placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirm password"
          />
        </Form.Item>

        <Form.Item style={{ justifyContent: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            //   onClick={handleSubmit}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Payment;
