import { createReducer } from "@reduxjs/toolkit";
import {
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
} from "../actions/ingredientsActions.jsx";

const initialState = {
  ingredients: [],
  loading: false,
  error: null,
};

const ingredientsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchIngredientsSuccess, (state, action) => {})
    .addCase(fetchIngredientsFailure, (state, action) => {});
});

export default ingredientsReducer;
