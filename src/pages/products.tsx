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
  PieChartFilled,
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
      <Row justify="start" className="products-container">
        <div style={{ margin: "15px 20px" }}>
          <h2>
            <PieChartFilled className="icon" />
            <span>STANDING OUT PRODUCTS</span>
          </h2>
          The list of trending products that you may like.
        </div>
      </Row>
      <Row className="products-container" justify="space-around">
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
      <Row justify="start" className="products-container">
        <div style={{ margin: "15px 20px" }}>
          <h2>
            <FundFilled className="icon" />
            <span>TOP SELLING PRODUCTS</span>
          </h2>
          The list of trending products that you may like.
        </div>
      </Row>
      <Row justify="space-around" className="products-container">
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
      <Row justify="start" className="products-container">
        <div style={{ margin: "15px 20px" }}>
          <h2>
            <RocketFilled className="icon" />
            <span>GAMES ON STEAM</span>
          </h2>
          The list of trending products that you may like.
        </div>
      </Row>
      <Row justify="space-around" className="products-container">
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
      <Row justify="start" className="products-container">
        <div style={{ margin: "15px 20px" }}>
          <h2>
            <AndroidFilled className="icon" />
            <span>USEFUL APPS</span>
          </h2>
          The list of trending products that you may like.
        </div>
      </Row>
      <Row justify="space-around" className="products-container">
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
      <Row justify="start" className="products-container">
        <div style={{ margin: "15px 20px" }}>
          <h2>
            <AccountBookFilled className="icon" />
            <span>CODE WALLET</span>
          </h2>
          The list of trending products that you may like.
        </div>
      </Row>
      <Row justify="space-around" className="products-container">
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
      <Row justify="start" className="products-container">
        <div style={{ margin: "15px 20px" }}>
          <h2>
            <DatabaseFilled className="icon" />
            <span>MOBILE DATA</span>
          </h2>
          The list of trending products that you may like.
        </div>
      </Row>
      <Row justify="space-around" className="products-container">
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
