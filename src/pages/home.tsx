import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import { Layout, Input, Menu, Breadcrumb, Badge, Avatar } from "antd";
import { Typography, Space, Dropdown, Button, message, Tooltip } from "antd";
import "antd/dist/antd.css";
import meta from "../dataStorage/images/meta.png";
import {
  DownOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  FacebookFilled,
  MailFilled,
} from "@ant-design/icons";
import Slider from "../features/slider";
import "./home.css";
import { LoginForm } from "../features/loginForm";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title, Text, Link } = Typography;
const { Search } = Input;

const onSearch = (value: string) => {
  console.log(value);
};

const LoginMenu = () => {
  const dispatch = useAppDispatch();
  function handleMenuClick(e: any) {
    dispatch(showForm());
    message.info("Click on menu item.");
    console.log("click", e);
  }
  return (
    <Menu
      onClick={handleMenuClick}
      style={{ width: 230, height: "auto", marginTop: 15, borderRadius: 5 }}
    >
      <Menu.Item
        key="1"
        icon={<UserOutlined />}
        style={{ margin: 15, borderRadius: 5, backgroundColor: "#fa8c16" }}
      >
        Login
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<UserOutlined />}
        style={{ margin: 15, borderRadius: 5, backgroundColor: "#fa8c16" }}
      >
        Sign up
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<FacebookFilled />}
        style={{
          margin: 15,
          borderRadius: 5,
          backgroundColor: "#096dd9",
          color: "white",
        }}
      >
        Login with Facebook
      </Menu.Item>
      <Menu.Item
        key="4"
        icon={<MailFilled />}
        style={{
          margin: 15,
          borderRadius: 5,
          backgroundColor: "#f5222d",
          color: "white",
        }}
      >
        Login with Google
      </Menu.Item>
    </Menu>
  );
};
const ItemsInCart = (
  <Menu style={{ width: 400, height: 250 }}>
    <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
      Current Cart
    </Menu.Item>
    <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
      No item in cart
    </Menu.Item>
  </Menu>
);

const Home = () => {
  const stateOfForm = useAppSelector(formState);
  const dispatch = useAppDispatch();
  return (
    <Layout className="mainLayout" style={{ opacity: stateOfForm ? 0.5 : 1 }}>
      <div className="form" onClick={(e) => e.stopPropagation()}>
        {stateOfForm ? <LoginForm /> : null}
      </div>
      <Header
        className="header"
        style={{
          height: 80,
        }}
      >
        <div
          className="container"
          style={{
            width: "80%",
            height: 80,
            padding: 0,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="logo"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img
              src={meta}
              alt="Logo"
              style={{ width: 40, height: 40, borderRadius: 5 }}
            />
            <Title style={{ color: "red", marginLeft: 10 }} level={3}>
              META GAMING
            </Title>
          </div>

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: "50%" }}
          />
          <Dropdown.Button
            style={{ backgroundColor: "transparent", color: "red" }}
            overlay={<LoginMenu />}
            placement="bottomCenter"
            icon={<UserOutlined />}
          ></Dropdown.Button>
          <Badge count={0} showZero>
            <Dropdown.Button
              overlay={ItemsInCart}
              placement="bottomRight"
              icon={<ShoppingCartOutlined />}
            ></Dropdown.Button>
          </Badge>
        </div>
      </Header>
      <Layout
        style={{
          width: "80%",

          margin: "0 auto",
        }}
      >
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 10,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Slider />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
