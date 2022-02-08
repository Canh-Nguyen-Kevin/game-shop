import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { product } from "./cartSlice";

export interface productDetail {
  products: Array<product>;
  currentProduct: product | null;
}
const initialState: productDetail = {
  products: [],
  currentProduct: null,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<any>) => {
      return (state.currentProduct = action.payload);
    },
    getAllProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

export const { getAllProducts, getProduct } = ProductSlice.actions;
export const currentProduct = (state: RootState) =>
  state.product.currentProduct;
export const allProducts = (state: RootState) => state.product.products;
export default ProductSlice.reducer;
