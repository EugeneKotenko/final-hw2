import { createSelector } from 'reselect';

// Базовий селектор, який вибирає корзину зі стану
export const selectCart = (state) => state.cart || {};

// Селектор для вибору товарів з корзини
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items || []
);

// Селектор для вибору загальної вартості товарів у корзині
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + (item.price || 0), 0)
);

// Селектор для вибору кількості товарів у корзині
export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.length
);

// Memoized версія селектора для вибору товарів
export const selectMemoizedCartItems = createSelector(
  [selectCartItems],
  (cartItems) => cartItems
);

// Інші потрібні селектори та допоміжна логіка...
