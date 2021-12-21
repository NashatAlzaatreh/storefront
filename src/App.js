import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Categories from "./components/storefront/Categories";
import Products from "./components/products/Products";
import SimpleCart from "./components/cart/SimpleCart";
import Cart from "./components/cart/Cart";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

function App(props) {
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
          <SimpleCart />
          {state.products.length > 0 && <Products />}

          {state.products.length === 0 && (
            <h3 className="welcoming">Welcome to Nashat's Store </h3>
          )}
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
