import React from "react";
import { useSelector } from "react-redux";

const Totalnum = () => {
  const { display } = useSelector((state) => state.filter);
  const { products } = useSelector((state) => state.productList);
  return (
    <>
      <h2>
        {display ? display.length : products ? products.length : null} products
      </h2>
    </>
  );
};

export default Totalnum;
