import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { showForm, hideForm, formState } from "../features/counter/formSlice";
import { Layout, Affix, BackTop } from "antd";
import { UpCircleFilled, MessageTwoTone } from "@ant-design/icons";

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
      <div style={{ opacity: stateOfForm ? 0.5 : 1 }}>
        <Affix offsetTop={0}>
          <AppHeader />
        </Affix>
        <BackTop>
          <UpCircleFilled style={{ fontSize: 40 }} />
        </BackTop>

        <div className="mainLayout">
          <Routes />
        </div>
        <Footer />
      </div>
      <div style={{ position: "fixed", bottom: 10, right: 10, fontSize: 40 }}>
        <MessageTwoTone />
      </div>
    </div>
  );
};
export default AppLayout;
