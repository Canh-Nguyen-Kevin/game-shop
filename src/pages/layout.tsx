import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import { Layout } from "antd";

import "antd/dist/antd.css";
import "./home.scss";

import { LoginForm } from "../features/loginForm";
import AppHeader from "./header";
import Routes from "../routes/routes";
import Footer from "./footer";

const AppLayout = () => {
  const stateOfForm = useAppSelector(formState);
  const dispatch = useAppDispatch();
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
        <Footer />
      </Layout>
    </div>
  );
};
export default AppLayout;
