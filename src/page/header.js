import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Ham from "../component/ham";
import Cart from "../asset/svg/cart.svg";
import { useSelector } from "react-redux";

function Header() {
  const inCart = useSelector((state) => state.products.cart.length);
  return (
    <>
      <header id="header">
        <div className="logo__wrap">
          <Ham />
          <Link className="logo__link" to="/">
            <h2 className="logo">aotao</h2>
          </Link>
        </div>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/help" className="nav__link">
              help
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              contact
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link">
              <img className="cart" src={Cart} alt="shopping cart" />
              <span>{inCart}</span>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
