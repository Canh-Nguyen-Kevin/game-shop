import React, { useEffect, useState } from "react";

import { getAllProducts, allProducts } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import api from "../api/apiProducts";
import ProductCard from "../components/productCard";
import { Row, Col, Divider } from "antd";
import {
  FundFilled,
  AndroidFilled,
  RocketFilled,
  AccountBookFilled,
  DatabaseFilled,
} from "@ant-design/icons";

const style = { background: "#0092ff", padding: "8px 0" };
const Products = () => {
  const products = useAppSelector(allProducts);
  const dispatch = useAppDispatch();
  const fetchProducts = async () => {
    const response: any = await api.get("/products").catch((err) => {
      console.log(err);
    });
    dispatch(getAllProducts(response.data));
    return response.data;
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await fetchProducts();

      if (allProducts) {
      }
    };

    getAllProducts();
  }, []);

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {products
          .filter((item) => item.type === "entertain")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={product} key={product.id} />
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
        {products
          .filter((item) => item.type === "topSelling")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={product} key={product.id} />
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
        {products
          .filter((item) => item.type === "games")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={product} key={product.id} />
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
        {products
          .filter((item) => item.type === "apps")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={product} key={product.id} />
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
        {products
          .filter((item) => item.type === "codes")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={product} key={product.id} />
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
        {products
          .filter((item) => item.type === "data")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={product} key={product.id} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Products;
