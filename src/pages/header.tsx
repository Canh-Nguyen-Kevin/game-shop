import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Typography,
  Layout,
  Input,
  Menu,
  Badge,
  Avatar,
  Dropdown,
  Button,
} from "antd";

import "antd/dist/antd.css";
import meta from "../dataStorage/images/meta.png";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import {
  setActiveUser,
  setUserLogOut,
  selectUserName,
  selectUserEmail,
} from "../features/counter/userSlice";

import { auth } from "../features/auth/userAuth";
import { LoginMenu, UserMenu, ItemsInCart } from "./headerMenu";

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const onSearch = (value: string) => {
  console.log(value);
};

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);

  console.log("userName is", userName);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          setActiveUser({
            userName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(
          setActiveUser({
            userName: "",
            email: "",
          })
        );
      }
    });
  }, []);

  return (
    <div>
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
          <Link to="/">
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
          </Link>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: "50%" }}
          />

          {userName ? (
            <Dropdown.Button overlay={<UserMenu />} placement="bottomCenter">
              {userName}
            </Dropdown.Button>
          ) : (
            <Dropdown.Button overlay={<LoginMenu />} placement="bottomCenter">
              Login
            </Dropdown.Button>
          )}

          <Badge count={0} showZero>
            <Dropdown.Button overlay={ItemsInCart} placement="bottomRight">
              Cart
            </Dropdown.Button>
          </Badge>
        </div>
      </Header>
    </div>
  );
};

export default AppHeader;
