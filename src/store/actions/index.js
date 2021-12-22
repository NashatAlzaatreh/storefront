const axios = require("axios");
const url = "https://todo-nashat.herokuapp.com/api/v2";

export const getCategories = () => {
  return async (dispatch) => {
    const res = await axios.get(`${url}/categories`);
    dispatch(loadCategory(res.data));
  };
};

export const loadCategory = (payload) => {
  console.log("loadCategory", payload);
  return {
    type: "LOAD_CATEGORY",
    payload,
  };
};

export const getProduct = (category) => {
  return async (dispatch) => {
    const res = await axios.get(`${url}/products`);
    dispatch(handleCategory(category, res.data));
  };
};

export const handleCategory = (category, data) => {
  return {
    type: "SELECT_CATEGORY",
    payload: {
      category,
      data,
    },
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    await axios.post(`${url}/products`, product);
    dispatch(removeFromCart(product.id));
    const res = await axios.get(`${url}/products`);
    dispatch(handleCategory(product.category, res.data));
  };
};

export const addToCart = (product) => {
  console.log("product", product);
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const removeProduct = (product) => {
  return async (dispatch) => {
    await axios.delete(`${url}/products/${product.id}`);
    dispatch(addToCart(product));

    const res = await axios.get(`${url}/products`);
    dispatch(handleCategory(product.category, res.data));
  };
};

export const removeFromCart = (id) => {
  console.log(id);
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};

export const activeProduct = (product) => {
  return {
    type: "ADD_ACTIVE_PRODUCT",
    payload: product,
  };
};
