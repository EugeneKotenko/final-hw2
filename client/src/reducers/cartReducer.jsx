import { createReducer } from '@reduxjs/toolkit';
import { saveToLocalStorage } from '../components/localStorageHelpers';
import { addToCart, removeFromCart, clearCart, adjustQuantity } from '../actions/cartActions';

const initialState = {
  items: [],
  totalQuantity: 0
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state);
      state.totalQuantity += 1;
    })
    .addCase(removeFromCart, (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (existingItemIndex !== -1) {
        state.totalQuantity -= state.items[existingItemIndex].quantity;
        state.items.splice(existingItemIndex, 1);
      }
    })
    .addCase(adjustQuantity, (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (existingItemIndex !== -1) {
        state.totalQuantity += action.payload.quantity - state.items[existingItemIndex].quantity;
        state.items[existingItemIndex].quantity = action.payload.quantity;
      }
    })
    .addCase(clearCart, (state) => {
      state.items = [];
      state.totalQuantity = 0;
    });
});

export default cartReducer;
