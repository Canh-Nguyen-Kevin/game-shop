import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const MobileMenu = () => {
  const [fold, setFold] = useState(false);
  const toggleFold = () => {
    setFold((fold) => !fold);
  };
  return (
    <Dropdown overlay={menu} trigger={["click"]} arrow>
      <a
        className="ant-dropdown-link"
        onClick={(e) => {
          e.preventDefault();
          toggleFold();
        }}
      >
        {fold ? (
          <MenuFoldOutlined style={{ fontSize: 40 }} />
        ) : (
          <MenuUnfoldOutlined style={{ fontSize: 40 }} />
        )}
      </a>
    </Dropdown>
  );
};
export default MobileMenu;
