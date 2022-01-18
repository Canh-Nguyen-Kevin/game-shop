import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const { id, name, img, description, price, discount } = product;
  return (
    <Link to={`/products/${id}`}>
      <div>
        <img src={img} alt="image" style={{ width: "100%", borderRadius: 5 }} />
        <h4>{description}</h4>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>{price}</h4>
          <h4>{discount}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
