import NavItem from "./navItem";
import Logo from "./logo";
import NavItemCart from "./navItemCart";

import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ logo, navs, numCart }) => {
  const navList = navs.map((item) => (
    <NavItem key={"nav_id_" + item} text={item} />
  ));
  return (
    <>
      <Logo logo={logo} />
      <ul className="header__nav">
        {navList}
        <NavItemCart numCart={numCart} />
      </ul>
    </>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  navs: PropTypes.array.isRequired,
  numCart: PropTypes.number.isRequired,
};

export default Navbar;
