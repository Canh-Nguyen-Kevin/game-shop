import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import {
  Form,
  Input,
  InputNumber,
  Card,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

import {
  DownOutlined,
  UserOutlined,
  PhoneOutlined,
  LockOutlined,
  CloseCircleFilled,
  FacebookFilled,
  MailFilled,
} from "@ant-design/icons";

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
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 24,
//       offset: 0,
//     },
//   },
// };

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

const Register = () => {
  return (
    <Form
      {...formItemLayout}
      name="register"
      onFinish={onFinish}
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
        rules={[{ required: true, message: "Please input your phone number!" }]}
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
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
const RegisterDes = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Register" bordered={false}>
        <img src="images/bird.png" alt="image" />
      </Card>
    </div>
  );
};
const Login = () => {
  return (
    <Form
      {...formItemLayout}
      name="normal_login"
      className="login-form"
      labelAlign="left"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        label="User name"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your Password!" }]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
        </Form.Item>
      </Form.Item>

      <Form.Item style={{ justifyContent: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%" }}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
const LoginDes = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Login" bordered={false}>
        <img src="images/person.png" alt="image" />
      </Card>
    </div>
  );
};

export const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useAppDispatch();
  return (
    <>
      <Row
        className="site-layout-background"
        style={{
          backgroundColor: "white",
          width: "60vw",
          height: "60vh",
          padding: 15,
          position: "relative",
        }}
      >
        <CloseCircleFilled
          style={{
            fontSize: "2rem",
            position: "absolute",
            top: "-15px",
            right: "-15px",
            zIndex: 100,
          }}
          onClick={() => dispatch(hideForm())}
        />
        <Col span={12}>{isLoginForm ? LoginDes() : RegisterDes()}</Col>
        <Col span={12}>
          <div
            style={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              margin: "10px auto",
            }}
          >
            <Button
              type="primary"
              style={{
                width: "48%",
              }}
              icon={<UserOutlined />}
              onClick={() => {
                return setIsLoginForm(true);
              }}
            >
              Login
            </Button>

            <Button
              type="primary"
              style={{
                width: "48%",
              }}
              icon={<UserOutlined />}
              onClick={() => {
                return setIsLoginForm(false);
              }}
            >
              Sign up
            </Button>
          </div>
          {isLoginForm ? Login() : Register()}
        </Col>
      </Row>
    </>
  );
};
