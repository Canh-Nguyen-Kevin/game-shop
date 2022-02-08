import React, { useState } from "react";
import { getAllProducts, allProducts } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Button, Row, Col } from "antd";
import { FileUnknownOutlined } from "@ant-design/icons";

import ProductCard from "./productCard";

const SimilarProduct = ({ item }: any) => {
  const products = useAppSelector(allProducts);
  const [productQty, setProductQty] = useState(4);
  const handleLoadMore = () => {
    const moreProducts = productQty + 4;
    if (
      moreProducts >
      products.filter((product) => product.type === item.type).length
    )
      return alert("no more products to load");
    setProductQty(moreProducts);
  };
  return (
    <>
      <h1 style={{ marginLeft: "10%" }}>
        <FileUnknownOutlined />
        Similar products
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {products
          .filter((product) => product.type === item.type)
          .slice(0, productQty)
          .map((item) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 5 }}
                md={{ span: 7 }}
                sm={{ span: 11 }}
                xs={{ span: 22 }}
              >
                <ProductCard product={item} />
              </Col>
            );
          })}
      </Row>
      <div style={{ textAlign: "center" }}>
        <Button type="primary" danger onClick={handleLoadMore}>
          Load more
        </Button>
      </div>
    </>
  );
};

export default SimilarProduct;
