import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import products from "./reducers/products";
import categories from "./reducers/categories";
import cart from "./reducers/cart";
import activeProductReducer from "./reducers/activeProduct";

let reducers = combineReducers({
  products,
  categories,
  cart,
  activeProductReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
