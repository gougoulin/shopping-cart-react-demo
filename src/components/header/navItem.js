import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ url, text }) => {
  return (
    <li className="header__nav__item">
      <a
        href={url}
        onClick={() => {
          alert(
            "Sorry, this page is NOT implemented yet. Please try clicking any product tilte to see details or clicking the cart on the right to see you shopping cart page. Or try the filter section on the left hand."
          );
        }}
        className="header__nav__link"
      >
        {text}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

export default NavItem;
