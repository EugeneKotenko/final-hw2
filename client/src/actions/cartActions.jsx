import { createAction } from '@reduxjs/toolkit';

// Створення дій
export const addToCart = createAction('cart/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');
export const clearCart = createAction('cart/clearCart');
export const adjustQuantity = createAction('cart/adjustQuantity');


export const delItem = createAction('cart/delItem');
export const addSmoozieToCart = createAction('cart/addSmoozieToCart');
