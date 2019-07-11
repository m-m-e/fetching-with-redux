import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import photosReducer from "./photosReducer";

const store = createStore(
  photosReducer,
  applyMiddleware(thunk)
);

export default store;