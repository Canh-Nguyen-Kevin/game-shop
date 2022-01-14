import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import { Layout } from "antd";

import "antd/dist/antd.css";
import "./home.scss";

import { LoginForm } from "../features/loginForm";
import AppHeader from "./header";
import Routes from "../routes/routes";
import Footer from "./footer";
// import Auth from "../features/auth/userAuth";
import productApi from "../api/productApi";

import { useEffect, useState } from "react";

const AppLayout = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const [productList, setProductList] = useState([]);

  const stateOfForm = useAppSelector(formState);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = {
  //         _page: 1,
  //         _limit: 10,
  //       };
  //       const res = await productApi.getAll(params);
  //       console.log(res);
  //       setProductList(res.data);
  //     } catch (error) {
  //       console.log("Failed to fetch", error);
  //     }
  //   };
  //   fetchProductList();
  // }, []);

  // useEffect(() => {
  //   const unregisterAuthObserver = firebase
  //     .auth()
  //     .onAuthStateChanged(async (user) => {
  //       if (!user) {
  //         console.log("user is not logged in");
  //         return;
  //       }
  //       console.log("login user", user.displayName);
  //       const token = await user.getIdToken();
  //       console.log("token", token);
  //       setIsSignedIn(!!user);
  //     });
  //   return () => unregisterAuthObserver();
  // }, []);

  // const handleBtnOnClick = async () => {
  //   try {
  //     const params = {
  //       _page: 1,
  //       _limit: 10,
  //     };
  //     const res = await productApi.getAll(params);
  //     console.log(res);
  //     setProductList(res.data);
  //   } catch (error) {
  //     console.log("Failed to fetch", error);
  //   }
  // };
  return (
    <div className="mainContainer">
      <div className="form" onClick={(e) => e.stopPropagation()}>
        {stateOfForm ? <LoginForm /> : null}
      </div>
      <Layout
        className="mainLayout"
        style={{ opacity: stateOfForm ? 0.5 : 1 }}
        // onClick={() => dispatch(hideForm())}
      >
        <AppHeader />
        <Routes />

        {/* <button onClick={handleBtnOnClick}>Fetch</button> */}
        <Footer />
      </Layout>
    </div>
  );
};
export default AppLayout;
