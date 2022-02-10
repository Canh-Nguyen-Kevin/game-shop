import React, { useState } from "react";
import {
  addCartItem,
  removeCartItem,
  adjustQty,
  checkProduct,
  currentCart,
} from "../features/counter/cartSlice";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Row, Col, Divider, Button, Rate, Input, Checkbox, Image } from "antd";

const CartItem = ({ product }: any) => {
  const [input, setInput] = useState<number>(product.qty);
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch();
  const handleQuantity = (e: any) => {
    setInput(e.target.value);

    if (e.target.value < 1) {
      window.confirm("Do you really want to remove this product")
        ? dispatch(removeCartItem(product))
        : setInput(1);
    } else {
      dispatch(adjustQty({ ...product, qty: parseInt(e.target.value) }));
    }
  };

  const handleCheckbox = (e: any) => {
    setChecked(e.target.checked);
    dispatch(checkProduct({ ...product, check: e.target.checked }));
  };

  return (
    <Row justify="center">
      <Col
        className="gutter-row"
        lg={{ span: 11 }}
        md={{ span: 11 }}
        sm={{ span: 22 }}
        xs={{ span: 22 }}
      >
        <Checkbox onChange={handleCheckbox} checked={product.check}></Checkbox>
        <Image width={80} src={product.img[0]} alt={product.name} />
        <span>{product.description}</span>
        <span>{product.duration}</span>
      </Col>
      <Col
        lg={{ span: 11 }}
        md={{ span: 11 }}
        sm={{ span: 22 }}
        xs={{ span: 22 }}
      >
        <span style={{ marginLeft: 10 }}>{product.price}</span>

        <Input
          type="number"
          style={{
            width: 50,
            textAlign: "center",
            border: "1px solid #1890ff",
          }}
          value={input}
          onChange={handleQuantity}
          min={0}
        />

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
};

export default CartItem;
