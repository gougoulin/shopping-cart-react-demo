import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ url, text }) => {
  return (
    <li className="header__nav__item">
      <a href={url} className="header__nav__link">
        {text}
      </a>
    </li>
  );
};

NavItem.propTypes = {};

export default NavItem;
