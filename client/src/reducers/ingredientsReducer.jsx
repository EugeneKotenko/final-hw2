import { createReducer } from '@reduxjs/toolkit';
import { fetchIngredientsSuccess, fetchIngredientsFailure } from '../actions/ingredientsActions.jsx';

const initialState = {
  ingredients: [],
  loading: false,
  error: null,
};

const ingredientsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchIngredientsSuccess, (state, action) => {
      // Обробка успішного завантаження інгредієнтів
    })
    .addCase(fetchIngredientsFailure, (state, action) => {
      // Обробка помилки завантаження інгредієнтів
    });
  // Додайте інші обробники для різних дій
});

export default ingredientsReducer;
