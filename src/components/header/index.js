import React from "react";
import Navbar from "./navbar";
import { useSelector } from "react-redux";

const Header = (props) => {
  const numCart = useSelector((state) => state.cartList.total);
  const { logo, navs } = useSelector((state) => state.header);
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <Navbar logo={logo} navs={navs} numCart={numCart || 0} />
        </nav>
      </header>
    </>
  );
};

export default Header;
