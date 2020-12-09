import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItemCart = ({ numCart }) => {
  return (
    <>
      <li className="header__nav__item">
        <Link to="/cart" className="header__nav__link">
          <span className="header__cart">
            cart
            <i className="fas fa-cart-arrow-down"></i>
            <span className="header__cart__modal">{numCart}</span>
          </span>
        </Link>
      </li>
    </>
  );
};

export default NavItemCart;
