import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { loadFromLocalStorage } from '../components/localStorageHelpers';
import localStorageMiddleware from '../components/localStorageMiddleware';

const initialState = {
  cart: loadFromLocalStorage()
};

const store = createStore(rootReducer, initialState, applyMiddleware(localStorageMiddleware));

export default store;