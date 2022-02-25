import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  showForm,
  formState,
  showAddressForm,
  addressFormState,
} from "../features/counter/formSlice";
import { Layout, Affix, BackTop } from "antd";
import {
  UpCircleFilled,
  MessageTwoTone,
  CloseCircleFilled,
} from "@ant-design/icons";
import { Steps, Row, Col } from "antd";

import "antd/dist/antd.css";
import "./home.scss";

import { LoginForm } from "../components/loginForm";
import AddressForm from "../components/addressForm";
import AppHeader from "./header";
import Routes from "../routes/routes";
import Footer from "./footer";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const AppLayout = () => {
  const stateOfForm = useAppSelector(formState);
  const addressForm = useAppSelector(addressFormState);
  const dispatch = useAppDispatch();

  return (
    <div className="mainContainer">
      <div className="form" onClick={(e) => e.stopPropagation()}>
        <Affix offsetTop={-200}>{stateOfForm ? <LoginForm /> : null}</Affix>
      </div>
      <Affix offsetTop={-300}>
        {addressForm ? (
          <Row justify="center" align="middle">
            <Col
              lg={{ span: 12 }}
              md={{ span: 20 }}
              sm={{ span: 20 }}
              xs={{ span: 22 }}
              className=" address-form "
            >
              <CloseCircleFilled
                className="close"
                onClick={() => dispatch(showAddressForm(false))}
              />
              <AddressForm />
            </Col>
          </Row>
        ) : null}
      </Affix>

      <div style={{ opacity: stateOfForm || addressForm ? 0.5 : 1 }}>
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
