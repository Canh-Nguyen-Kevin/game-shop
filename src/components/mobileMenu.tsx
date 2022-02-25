import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeFilled,
  QqCircleFilled,
  HourglassFilled,
  RocketFilled,
  ThunderboltFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  setActiveUser,
  setUserLogOut,
  selectUserName,
  selectUserEmail,
} from "../features/counter/userSlice";
import { showForm, formState } from "../features/counter/formSlice";
import { resetCart } from "../features/counter/cartSlice";
import { auth } from "../features/auth/userAuth";

const MobileMenu = () => {
  const [fold, setFold] = useState(false);
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(selectUserEmail);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOut());
        dispatch(resetCart());
      })
      .catch((error: any) => alert(error.message));
  };

  return (
    <>
      <a
        className="ant-dropdown-link"
        onClick={(e) => {
          e.preventDefault();
          setFold(!fold);
        }}
      >
        {fold ? (
          <MenuFoldOutlined style={{ fontSize: 40 }} />
        ) : (
          <MenuUnfoldOutlined style={{ fontSize: 40 }} />
        )}
      </a>
      <Menu className={fold ? "menu active" : "menu"}>
        {userEmail ? (
          <Menu.Item key="0">
            <UserOutlined className="icon" />
            {userEmail}
          </Menu.Item>
        ) : (
          <Menu.Item key="0" onClick={() => dispatch(showForm(true))}>
            <UserOutlined className="icon" />
            Login/Sign up
          </Menu.Item>
        )}

        <Link to="./">
          <Menu.Item key="1">
            <HomeFilled className="icon" />
            Home
          </Menu.Item>
        </Link>
        <Menu.Divider />
        <Menu.Item key="2">
          <QqCircleFilled className="icon" />
          Entertaining
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
          <ThunderboltFilled className="icon" />
          Data
        </Menu.Item>
        <Menu.Divider />
        {userEmail ? (
          <Link to="./">
            <Menu.Item key="6" onClick={handleSignOut}>
              <LogoutOutlined className="icon" />
              Log out
            </Menu.Item>
          </Link>
        ) : null}
      </Menu>
    </>
  );
};

export default MobileMenu;
