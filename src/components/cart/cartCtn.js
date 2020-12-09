import React from "react";
import Ctn from "../common/ctn";

const CartCtn = ({ name }) => {
  const handler = () => {
    alert("proceed to checkout is underconstruction");
  };
  return (
    <>
      <Ctn handler={handler} name={name} />
    </>
  );
};

export default CartCtn;
