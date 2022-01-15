import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../features/auth/userAuth";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import {
  setActiveUser,
  setUserLogOut,
  selectUserName,
  selectUserEmail,
} from "../features/counter/userSlice";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login done", user.email);
        const displayName = user.email;
        dispatch(
          setActiveUser({
            userName: displayName,
            email: displayName,
          })
        );
        dispatch(hideForm());
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error");
        // ..
      });
  };
  return (
    <Form
      {...formItemLayout}
      name="normal_login"
      className="login-form"
      labelAlign="left"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
