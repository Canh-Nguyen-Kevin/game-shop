import React, { useState } from "react";
import { Button, Rate, Input, notification } from "antd";
import {
  CheckCircleFilled,
  ShoppingCartOutlined,
  DollarOutlined,
} from "@ant-design/icons";

import { addCartItem } from "../features/counter/cartSlice";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from "../features/counter/counterSlice";
import { selectUserEmail } from "../features/counter/userSlice";
import { showForm, hideForm } from "../features/counter/formSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const openNotification = (
  placement: string,
  message: string,
  description: string
) => {
  notification.info({
    message: message,
    description: description,
    icon: <CheckCircleFilled style={{ color: "#108ee9" }} />,
  });
};
const DescriptionDetail = ({ item }: any) => {
  const [pricing, setPricing] = useState<number>();
  const [discounting, setDiscounting] = useState<number>();

  const dispatch = useAppDispatch();
  const quantity: number = useAppSelector(selectCount);
  const userEmail = useAppSelector(selectUserEmail);
  const { id, type, name, img, description, price, discount } = item;

  const addProductToCart = () => {
    if (userEmail) {
      dispatch(
        addCartItem({
          ...item,
          price: pricing,
          discount: discounting,
          qty: quantity,
        })
      );
      openNotification(
        "topRight",
        "Success",
        "The product has been added to cart"
      );
    } else {
      dispatch(showForm());
      alert("please login to use this function");
    }
  };
  return (
    <div>
      <h1>{description}</h1>
      <strong style={{ fontSize: 15, marginRight: 10 }}>Type: {type}</strong>

      <Rate disabled defaultValue={5} />
      <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>5.0</span>
      <div style={{ display: "flex" }}>
        <h2 style={{ color: "blue" }}>{pricing ? pricing : price}đ</h2>
        <h2 style={{ marginLeft: 30, color: "red" }}>
          -{discounting ? discounting : discount}% discount
        </h2>
      </div>
      <h2 style={{ color: "blue" }}>FREE SHIP FOR ALL PRODUCTS</h2>
      <div>
        <strong style={{ marginRight: 20, fontSize: "1.3rem" }}>
          Quantity:
        </strong>
        <Button type="primary" ghost onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Input
          style={{
            width: 50,
            textAlign: "center",
            border: "1px solid #1890ff",
          }}
          value={quantity}
          min={0}
        />
        <Button type="primary" ghost onClick={() => dispatch(increment())}>
          +
        </Button>
      </div>
      <div
        style={{
          marginTop: 30,
          display: "flex",
        }}
      >
        <Button
          size="large"
          danger
          style={{ width: 100, fontSize: "1.1rem" }}
          onClick={() => {
            setPricing(price);
            setDiscounting(discount);
          }}
        >
          1 month
        </Button>
        <Button
          danger
          size="large"
          style={{ width: 100, fontSize: "1.1rem" }}
          onClick={() => {
            setPricing(price * 2);
            setDiscounting(discount / 2);
          }}
        >
          6 months
        </Button>

        <Button
          danger
          size="large"
          style={{ width: 100, fontSize: "1.1rem" }}
          onClick={() => {
            setPricing(price * 3);
            setDiscounting(discount / 2);
          }}
        >
          1 year
        </Button>
        <Button
          danger
          size="large"
          style={{ width: 100, fontSize: "1.1rem" }}
          onClick={() => {
            setPricing(price * 5);
            setDiscounting(discount / 2);
          }}
        >
          Life time
        </Button>
      </div>
      <div style={{ marginTop: 30 }}>
        <Button
          type="primary"
          size="large"
          danger
          icon={<ShoppingCartOutlined />}
          onClick={addProductToCart}
          style={{ width: 170, marginRight: 20, fontSize: "1.1rem" }}
        >
          Add to cart
        </Button>
        <Button
          type="primary"
          size="large"
          icon={<DollarOutlined />}
          style={{ width: 170, fontSize: "1.1rem" }}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default DescriptionDetail;
