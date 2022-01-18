import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import { Row, Col, Divider } from "antd";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

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
import MobileMenu from "../components/mobileMenu";

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
    <Row
      gutter={16}
      align="middle"
      justify="center"
      style={{ height: 100, width: "100%", backgroundColor: "#002766" }}
    >
      <Col
        className="gutter-row"
        lg={{ span: 0 }}
        md={{ span: 0 }}
        sm={{ span: 4 }}
        xs={{ span: 4 }}
      >
        <MobileMenu />
      </Col>
      <Col
        className="gutter-row"
        lg={{ span: 4 }}
        md={{ span: 0 }}
        sm={{ span: 0 }}
        xs={{ span: 0 }}
      >
        <Link to="/">
          <div
            className="logo"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={meta}
              alt="Logo"
              style={{ width: 50, height: 50, borderRadius: 5 }}
            />
            <Title
              style={{ color: "red", marginLeft: 10, textAlign: "center" }}
              level={3}
            >
              META GAMING
            </Title>
          </div>
        </Link>
      </Col>
      <Col
        className="gutter-row"
        lg={{ span: 10 }}
        md={{ span: 14 }}
        sm={{ span: 18 }}
        xs={{ span: 18 }}
      >
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: "100%" }}
        />
      </Col>
      <Col
        className="gutter-row"
        lg={{ span: 4, offset: 1 }}
        md={{ span: 5 }}
        sm={{ span: 0 }}
        xs={{ span: 0 }}
      >
        {userName ? (
          <Dropdown overlay={<UserMenu />} placement="bottomCenter" arrow>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: 15, color: "white" }}
            >
              <UserOutlined style={{ fontSize: 30 }} /> {userName}
            </a>
          </Dropdown>
        ) : (
          <Dropdown overlay={<LoginMenu />} placement="bottomCenter" arrow>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: 15, color: "white" }}
            >
              <UserOutlined style={{ fontSize: 30 }} /> Login/Register
            </a>
          </Dropdown>
        )}
      </Col>
      <Col
        className="gutter-row"
        lg={{ span: 1 }}
        md={{ span: 2 }}
        sm={{ span: 0 }}
        xs={{ span: 0 }}
      >
        <Badge count={0} showZero>
          <Dropdown overlay={ItemsInCart} placement="bottomRight" arrow>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: 15, color: "white" }}
            >
              <ShoppingCartOutlined style={{ fontSize: 40 }} />
            </a>
          </Dropdown>
        </Badge>
      </Col>
    </Row>
  );
};

export default AppHeader;
