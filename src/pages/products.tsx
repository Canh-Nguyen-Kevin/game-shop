import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/apiProducts";
import ProductCard from "./productCard";
import { Row, Col, Divider } from "antd";
import {
  FundFilled,
  AndroidFilled,
  RocketFilled,
  AccountBookFilled,
  DatabaseFilled,
} from "@ant-design/icons";

const descriptions = [
  { id: 1, icon: "RiseOutlined", des1: "somethings", des2: "longer than des1" },
  { id: 2, icon: "RiseOutlined", des1: "somethings", des2: "longer than des1" },
  { id: 3, icon: "RiseOutlined", des1: "somethings", des2: "longer than des1" },
  { id: 4, icon: "RiseOutlined", des1: "somethings", des2: "longer than des1" },
  { id: 5, icon: "RiseOutlined", des1: "somethings", des2: "longer than des1" },
  { id: 6, icon: "RiseOutlined", des1: "somethings", des2: "longer than des1" },
];
const style = { background: "#0092ff", padding: "8px 0" };
const Products = () => {
  const [products, setProducts] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [games, setGames] = useState([]);
  const [apps, setApps] = useState([]);
  const [codes, setCodes] = useState([]);
  const [data, setData] = useState([]);
  const productsArr = [products, topSelling, games, apps, codes, data];
  const getProducts = async () => {
    const response: any = await api.get("/products").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  const getTopSelling = async () => {
    const response: any = await api.get("/topSelling").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  const getGames = async () => {
    const response: any = await api.get("/games").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  const getApps = async () => {
    const response: any = await api.get("/apps").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  const getCodes = async () => {
    const response: any = await api.get("/codes").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  const getData = async () => {
    const response: any = await api.get("/data").catch((err) => {
      console.log(err);
    });
    return response.data;
  };
  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      const topSellingProducts = await getTopSelling();
      const gameProducts = await getGames();
      const appProducts = await getApps();
      const codeProducts = await getCodes();
      const dataProducts = await getData();
      if (allProducts) setProducts(allProducts);
      if (topSellingProducts) setTopSelling(topSellingProducts);
      if (gameProducts) setGames(gameProducts);
      if (appProducts) setApps(appProducts);
      if (codeProducts) setCodes(codeProducts);
      if (dataProducts) setData(dataProducts);
    };

    getAllProducts();
  }, []);
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {products.map((product) => {
          return (
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 22 }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
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
              <FundFilled />
              <strong>Top selling products</strong>
            </h2>
            The list of trending products that you may like.
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {topSelling.map((product) => {
          return (
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 22 }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
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
              <RocketFilled />
              <strong>Games on Steam</strong>
            </h2>
            The list of trending products that you may like.
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {games.map((product) => {
          return (
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 22 }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
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
              <AndroidFilled />
              <strong>Useful apps</strong>
            </h2>
            The list of trending products that you may like.
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {apps.map((product) => {
          return (
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 22 }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
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
              <AccountBookFilled />
              <strong>Code Wallet</strong>
            </h2>
            The list of trending products that you may like.
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {codes.map((product) => {
          return (
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 22 }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
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
              <DatabaseFilled />
              <strong>Mobile Data</strong>
            </h2>
            The list of trending products that you may like.
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {data.map((product) => {
          return (
            <Col
              className="gutter-row"
              lg={{ span: 5 }}
              md={{ span: 7 }}
              sm={{ span: 11 }}
              xs={{ span: 22 }}
            >
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Products;
