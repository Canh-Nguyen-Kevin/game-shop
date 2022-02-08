import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/apiProducts";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Row, Col } from "antd";
import ImageDetail from "../components/imageDetail";
import DescriptionDetail from "../components/descriptionDetail";
import CommentDetail from "../components/commentDetail";
interface paramsType {
  productId: string;
}

const ProductDetail = () => {
  const { productId } = useParams<paramsType>();
  const dispatch = useAppDispatch();

  const [item, setItem] = useState({
    id: 1,
    type: "",
    name: "",
    img: ["string", "string", "string", "string"],
    description: "string",
    detail: ["string", "string", "string", "string"],
    information: ["string", "string", "string", "string"],
    price: 0,
    discount: 0,
    qty: 0,
  });
  const fetchProductDetail = async () => {
    const response: any = await api
      .get(`/products/${productId}`)
      .catch((err) => console.log(err));

    if (response.data) setItem(response.data);
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="detail-container">
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="center"
        style={{ margin: 0, padding: 0 }}
      >
        <Col
          className="gutter-row"
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 10 }}
          xs={{ span: 22 }}
        >
          <ImageDetail item={item} />
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 22 }}
        >
          <DescriptionDetail item={item} />
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 0 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        ></Col>
      </Row>
      <CommentDetail item={item} />
    </div>
  );
};

export default ProductDetail;
