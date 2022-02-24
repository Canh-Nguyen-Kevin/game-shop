import React, { useState } from "react";
import { Layout, Divider, Menu, Breadcrumb, Row, Col, Card } from "antd";
import "antd/dist/antd.css";

import HomeSider from "../components/homesider";
import Slider from "../components/slider";
import Products from "./products";

const { Content } = Layout;

const Home = () => {
  return (
    <>
      <Row align="middle" justify="space-around" className="products-container">
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <HomeSider />
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 18 }}
          md={{ span: 21 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <Slider />
        </Col>
      </Row>

      <Products />
    </>
  );
};

export default Home;
