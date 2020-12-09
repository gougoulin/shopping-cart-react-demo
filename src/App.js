import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import "./css/style.css";

import Product from "./pages/product";
import Home from "./pages/home";
import ShoppingCart from "./pages/shoppingcart";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
