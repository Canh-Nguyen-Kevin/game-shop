import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import {
  setActiveUser,
  setUserLogOut,
  selectUserName,
  selectUserEmail,
} from "../features/counter/userSlice";
import {
  getAuth,
  signOut,
  // signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  auth,
  // facebookProvider,
  googleProvider,
} from "../features/auth/userAuth";
import { async } from "@firebase/util";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
// const auth = getAuth();
const onSearch = (value: string) => {
  console.log(value);
};

const LoginMenu = () => {
  const dispatch = useAppDispatch();

  const loginWithGoogle = () => {
    auth.signInWithRedirect(googleProvider).then((result: any) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential: any = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      console.log("result", result.user.displayName);
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          email: result.user.email,
        })
      );
      // ...
    });
    // .catch((err) => alert(err.message));
  };
  // const loginWithGoogle = () => {
  // getRedirectResult(auth)
  //   .then((result: any) => {
  //     dispatch(
  //       setActiveUser({
  //         userName: result.user.displayName,
  //         email: result.user.email,
  //       })
  //     );
  //   })
  //   .catch((err) => alert(err.message));
  // auth
  //   .signInWithRedirect(googleProvider)
  //   .then((result:any) => {
  //     dispatch(
  //       setActiveUser({
  //         userName: result.user.displayName,
  //         email: result.user.email,
  //       })
  //     );
  //     console.log("user", result.user);
  //   })
  //   .catch((error: any) => alert(error.message));

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        return dispatch(setUserLogOut());
      })
      .catch((error: any) => alert(error.message));
  };
  return (
    <div>
      <Menu
        style={{ width: 230, height: "auto", marginTop: 15, borderRadius: 5 }}
      >
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
      </Menu>
    </div>
  );
};
const ItemsInCart = (
  <Menu style={{ width: 400, height: 250 }}>
    <Link to="/cart">
      <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
        Current Cart
      </Menu.Item>
      <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
        No item in cart
      </Menu.Item>
    </Link>
  </Menu>
);

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);

  console.log("userName is", userName);

  useEffect(() => {
    const unregisterAuthObserver = getAuth().onAuthStateChanged(
      async (user) => {
        if (!user) {
          console.log("user is not logged in");
          return;
        }
        console.log("login user", user.displayName);
        const token = await user.getIdToken();
        console.log("token", token);
        // setIsSignedIn(!!user);
      }
    );
    return () => unregisterAuthObserver();
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        return dispatch(setUserLogOut());
      })
      .catch((error: any) => alert(error.message));
  };
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
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <Dropdown.Button
              style={{ backgroundColor: "transparent", color: "red" }}
              overlay={<LoginMenu />}
              placement="bottomCenter"
              icon={<UserOutlined />}
            />
          )}

          <Badge count={0} showZero>
            <Dropdown.Button
              overlay={ItemsInCart}
              placement="bottomRight"
              icon={<ShoppingCartOutlined />}
            />
          </Badge>
        </div>
      </Header>
    </div>
  );
};

export default AppHeader;
