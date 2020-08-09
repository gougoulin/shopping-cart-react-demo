import React from "react";
import "../css/style.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../action/productActions";

function Ham() {
  const isMenuClicked = useSelector((state) => state.products.isMenuClicked);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    console.log(e.target);
    dispatch(toggleMenu());
  };
  return (
    <div
      className={isMenuClicked ? "ham ham__open" : "ham"}
      onClick={handleClick}
    >
      <div className="ham__line"></div>
      <div className="ham__line"></div>
      <div className="ham__line"></div>
    </div>
  );
}

export default Ham;
