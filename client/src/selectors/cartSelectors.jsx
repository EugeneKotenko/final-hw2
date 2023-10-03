import { createSelector } from "reselect";

export const selectCart = (state) => state.cart || {};

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items || []
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + (item.price || 0), 0)
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.length
);

export const selectMemoizedCartItems = createSelector(
  [selectCartItems],
  (cartItems) => cartItems
);
