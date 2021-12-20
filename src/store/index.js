import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./categories";

let reducers = combineReducers({ productReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
