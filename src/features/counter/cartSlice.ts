import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface product {
  id: number;
  type: string;
  name: string;
  img: [string, string, string, string];
  description: string;
  detail: string;
  information: string;
  price: number;
  discount: number;
  qty: number;
}

export interface state {
  products: Array<product>;
  currentProduct: product | null;
}

const initialState: state = {
  products: [],

  currentProduct: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<any>) => {
      let alreadyAdded = true;
      const inCartProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (inCartProduct) {
        state.products.forEach((product: product) =>
          product.id === action.payload.id
            ? (product.qty += action.payload.qty)
            : null
        );
      } else {
        alreadyAdded = false;
      }

      if (!state.products.length || !alreadyAdded) {
        state.products.push({ ...action.payload });
      }
    },
    removeCartItem: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        (product: product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addCartItem, removeCartItem } = CartSlice.actions;
export const currentCart = (state: RootState) => state.cart.products;

export default CartSlice.reducer;
