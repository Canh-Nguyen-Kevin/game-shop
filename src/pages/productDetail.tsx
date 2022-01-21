import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { productId }: any = useParams();
  console.log("productId", productId);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
