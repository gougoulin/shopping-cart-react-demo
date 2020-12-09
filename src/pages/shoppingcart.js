import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import CartList from "../components/cart/cartList";
import Checkout from "../components/cart/checkout";

const ShoppingCart = ({ props }) => {
  return (
    <div className="cartpage">
      <Header />
      <div className="cart__box">
        <main className="cart__main">
          <div className="cart__heading">
            <h3>my shopping cart</h3>
            <p>price</p>
          </div>
          <CartList />
        </main>
        <aside className="cart__aside">
          <Checkout />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
