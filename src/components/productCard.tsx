import React from "react";
import { Link } from "react-router-dom";
import { resetCount } from "../features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const ProductCard = ({ product }: any) => {
  const { id, name, img, description, price, discount } = product;
  const dispatch = useAppDispatch();
  return (
    <Link to={`/products/${id}`}>
      <div key={id} onClick={() => dispatch(resetCount())}>
        <img
          src={`/${img[0]}`}
          alt="image"
          style={{ width: "100%", borderRadius: 5 }}
        />
        <h4>{description}</h4>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4 style={{ color: "blue" }}>{price}đ</h4>
          <h4 style={{ color: "red" }}>-{discount}%</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
