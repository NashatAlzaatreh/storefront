import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import products from "./reducers/products";
import categories from "./reducers/categories";
import cart from "./reducers/cart";

let reducers = combineReducers({ products, categories, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
