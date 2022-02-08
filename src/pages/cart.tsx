import React, { useEffect } from "react";
import {
  addCartItem,
  removeCartItem,
  currentCart,
} from "../features/counter/cartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Row, Col, Divider, Button, Rate, Checkbox, Image } from "antd";

const Cart = () => {
  const products = useAppSelector(currentCart);
  const dispatch = useAppDispatch();
  return (
    <>
      {products.map((product) => {
        return (
          <Row justify="center" key={product.id}>
            <Col
              className="gutter-row"
              lg={{ span: 11 }}
              md={{ span: 11 }}
              sm={{ span: 22 }}
              xs={{ span: 22 }}
            >
              <Checkbox onChange={() => console.log("check")}></Checkbox>
              <Image width={80} src={product.img[0]} alt={product.name} />
              {product.description}
            </Col>
            <Col
              lg={{ span: 11 }}
              md={{ span: 11 }}
              sm={{ span: 22 }}
              xs={{ span: 22 }}
            >
              <span style={{ marginLeft: 10 }}>{product.price}</span>

              <span style={{ marginLeft: 10 }}>{product.qty}</span>

              <span style={{ marginLeft: 10 }}>{`${
                product.price * product.qty
              } đ`}</span>
              <Button
                type="primary"
                danger
                onClick={() => {
                  dispatch(removeCartItem(product));
                }}
              >
                Remove product
              </Button>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Cart;
