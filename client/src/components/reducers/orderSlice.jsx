import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      /*...*/
    },
    removeFromCart: (state, action) => {
      /*...*/
    },
    clearCart: (state) => {
      /*...*/
    },
    adjustQuantity: (state, action) => {
      /*...*/
    },
    delItem: (state, action) => {
      /*...*/
    },
  },
});

export const { addToCart, removeFromCart, clearCart, adjustQuantity, delItem } =
  cartSlice.actions;