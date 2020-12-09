import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Ham from "../component/ham";
import Cart from "../asset/svg/cart.svg";
import { useSelector } from "react-redux";

// Header Component of each page
function Header() {
  const inCart = useSelector((state) => state.products.cart.length);
  return (
    <>
      <header id="header">
        <div className="logo__wrap">
          <Ham />
          <Link className="logo__link" to="/">
            <h2 className="logo">aotao mobile</h2>
          </Link>
        </div>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/help" className="nav__link">
              search
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              sign in
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/checkout" className="nav__link">
              <img className="cart" src={Cart} alt="shopping cart" />
              <span className="badge__cart__num">{inCart}</span>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
