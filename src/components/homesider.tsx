import React from "react";
import { Layout, Input, Menu } from "antd";
import {
  QqCircleFilled,
  FireFilled,
  HourglassFilled,
  RocketFilled,
  TrophyFilled,
  ThunderboltFilled,
} from "@ant-design/icons";

const { Sider } = Layout;

const HomeSider = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0, fontSize: "1.1rem" }}
      >
        <Menu.Item key="1">
          <QqCircleFilled className="icon" />
          Entertaining
        </Menu.Item>
        <Menu.Item key="2">
          <FireFilled className="icon" />
          Top Selling
        </Menu.Item>
        <Menu.Item key="3">
          <HourglassFilled className="icon" />
          Gaming
        </Menu.Item>
        <Menu.Item key="4">
          <RocketFilled className="icon" />
          Applications
        </Menu.Item>
        <Menu.Item key="5">
          <TrophyFilled className="icon" />
          Code Wallet
        </Menu.Item>
        <Menu.Item key="6">
          <ThunderboltFilled className="icon" />
          Data
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default HomeSider;
