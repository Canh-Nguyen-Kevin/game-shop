import React, { useState } from "react";
import { Layout, Input, Menu, Breadcrumb, Badge, Avatar } from "antd";
import "antd/dist/antd.css";

import HomeSider from "./sider";
import Slider from "../features/slider";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout
      style={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <HomeSider />
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
  );
};

export default Home;
