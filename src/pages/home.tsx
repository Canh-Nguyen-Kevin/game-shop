import React, { useState } from "react";
import { Layout, Divider, Menu, Breadcrumb, Row, Col, Card } from "antd";
import "antd/dist/antd.css";
import { PieChartFilled } from "@ant-design/icons";
import HomeSider from "./sider";
import Slider from "../features/slider";
import Products from "./products";

const { Content } = Layout;

const Home = () => {
  return (
    <>
      <Row gutter={8} align="middle" justify="center">
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
          lg={{ span: 15 }}
          md={{ span: 21 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Slider />
        </Col>
      </Row>
      <Row justify="center">
        <Col
          className="gutter-row"
          lg={{ span: 20 }}
          md={{ span: 21 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <div style={{ margin: "15px 0" }}>
            <h2>
              <PieChartFilled />
              <strong>Standing out products</strong>
            </h2>
            The list of trending products that you may like.
          </div>
        </Col>
      </Row>
      <Products />
    </>
  );
};

export default Home;
