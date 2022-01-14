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
import {
  DownOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  FacebookFilled,
  MailFilled,
} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import {
  setActiveUser,
  setUserLogOut,
  selectUserName,
  selectUserEmail,
} from "../features/counter/userSlice";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../features/auth/userAuth";

export const LoginMenu = () => {
  const dispatch = useAppDispatch();

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const loginUser = {
          userName: result.user.displayName,
          email: result.user.email,
          token: token,
        };
        // if (localStorage.getItem("user")) return;
        localStorage.setItem("user", JSON.stringify(loginUser));
        const getUser: any = localStorage.getItem("user");
        // console.log("result", getUser);
        dispatch(
          setActiveUser({
            userName: loginUser.userName,
            email: loginUser.email,
          })
        );

        // ...
      })
      .catch((err) => alert(err.message));
  };
  const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result: any) => {
        const credential: any =
          FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const loginUser = {
          userName: result.user.displayName,
          email: result.user.email,
          token: token,
        };

        localStorage.setItem("user", JSON.stringify(loginUser));
        const getUser: any = localStorage.getItem("user");

        dispatch(
          setActiveUser({
            userName: loginUser.userName,
            email: loginUser.email,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Menu
      style={{ width: 230, height: "auto", marginTop: 15, borderRadius: 5 }}
    >
      <React.Fragment>
        <Menu.Item
          key="1"
          icon={<UserOutlined />}
          style={{ margin: 15, borderRadius: 5, backgroundColor: "#fa8c16" }}
          onClick={() => dispatch(showForm())}
        >
          Login
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          style={{ margin: 15, borderRadius: 5, backgroundColor: "#fa8c16" }}
          onClick={() => dispatch(showForm())}
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
          onClick={loginWithFacebook}
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
          onClick={loginWithGoogle}
        >
          Login with Google
        </Menu.Item>
      </React.Fragment>
    </Menu>
  );
};
export const UserMenu = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        return dispatch(setUserLogOut());
      })
      .catch((error: any) => alert(error.message));
  };
  return (
    <Menu
      style={{ width: 230, height: "auto", marginTop: 15, borderRadius: 5 }}
    >
      <React.Fragment>
        <Menu.Item key="1" onClick={() => dispatch(showForm())}>
          My profile
        </Menu.Item>
        <Menu.Item key="2" onClick={() => dispatch(showForm())}>
          Purchase history
        </Menu.Item>
        <Menu.Item key="3" onClick={handleSignOut}>
          Log out
        </Menu.Item>
      </React.Fragment>
    </Menu>
  );
};
export const ItemsInCart = (
  <Menu style={{ width: 400, height: 250 }}>
    <Link to="/cart">
      <React.Fragment>
        <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
          Current Cart
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          No item in cart
        </Menu.Item>
      </React.Fragment>
    </Link>
  </Menu>
);
