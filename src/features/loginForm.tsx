import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../features/auth/userAuth";
import Register from "./register";
import Login from "./login";
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

// const onFinish = (values: any) => {
//   console.log("Received values of form: ", values);
// };

const RegisterDes = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Register" bordered={false}>
        <img src="images/bird.png" alt="image" />
      </Card>
    </div>
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
          {isLoginForm ? <Login /> : <Register />}
        </Col>
      </Row>
    </>
  );
};
