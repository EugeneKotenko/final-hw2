import { createStore, applyMiddleware } from "redux";
import {
  localStorageMiddleware,
  loadFromLocalStorage,
} from "./localStorageMiddleware";
import rootReducer from "../reducers/rootReducer";

const preloadedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(localStorageMiddleware)
);

export default store;