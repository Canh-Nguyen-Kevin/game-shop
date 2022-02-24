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
    <>
      <div className="products-container">
        <Row justify="space-between" className="cartItem">
          <Col
            className="gutter-row"
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <ImageDetail item={item} />
          </Col>
          <Col
            className="gutter-row"
            lg={{ span: 13 }}
            md={{ span: 13 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <DescriptionDetail item={item} />
          </Col>
        </Row>
      </div>

      <CommentDetail item={item} />
    </>
  );
};

export default ProductDetail;
