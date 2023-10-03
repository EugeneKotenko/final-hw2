import { createAction } from '@reduxjs/toolkit';

export const fetchIngredientsSuccess = createAction('ingredients/fetchIngredientsSuccess');
export const fetchIngredientsFailure = createAction('ingredients/fetchIngredientsFailure');
// Додайте інші дії для роботи з інгредієнтами
