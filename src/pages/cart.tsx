import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { checkProduct, currentCart } from "../features/counter/cartSlice";
import { getAllProducts, allProducts } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { Row, Col, Divider, Button, Rate, Input, Checkbox, Image } from "antd";
import CartItem from "../components/cartItem";
import ProductCard from "../components/productCard";

const Cart = () => {
  const products = useAppSelector(currentCart);
  const dispatch = useAppDispatch();
  const similarProducts = useAppSelector(allProducts);

  const [selectAll, setSelectAll] = useState(false);
  const [productQty, setProductQty] = useState(4);

  const productQuantity = products.reduce(
    (sum, product) => (product.check ? sum + product.qty : sum),
    0
  );
  const totalMoney = products.reduce(
    (sum, product) => (product.check ? sum + product.price * product.qty : sum),
    0
  );

  const handleSelectAll = (e: any) => {
    setSelectAll(e.target.checked);
    products.forEach((product) => {
      dispatch(checkProduct({ ...product, check: e.target.checked }));
    });
  };
  const handleCheckout = () => {
    if (!productQuantity) alert("Please select at least a product to purchase");
  };
  const handleLoadMore = () => {
    const moreProducts = productQty + 4;
    if (moreProducts > similarProducts.length)
      return alert("no more products to load");
    setProductQty(moreProducts);
  };

  return (
    <>
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={`${product.id}${product.duration}`}
          />
        );
      })}
      <div>
        <Checkbox onChange={handleSelectAll} checked={selectAll}>
          Select All
        </Checkbox>
        <span>
          Subtotal({productQuantity}items):{totalMoney}đ
        </span>
      </div>
      <div>
        <Link to={productQuantity ? "/payment" : "/cart"}>
          <Button onClick={handleCheckout}>Proceed to check out</Button>
        </Link>
      </div>
      <h2>PRODUCTS THAT YOU MIGHT LIKE</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {similarProducts.slice(0, productQty).map((item) => {
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

export default Cart;
