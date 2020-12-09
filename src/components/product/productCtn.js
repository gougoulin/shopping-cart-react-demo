import React from "react";
import Ctn from "../common/ctn";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add2cart } from "../../actions/add2cartAction";

const ProductCtn = ({ name, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const qty = useSelector((state) => state.currentProduct.qtyPurchased);
  const handleSubmit = () => {
    // alert("Item has been put into the cart. You will be redirect to homepage.");
    dispatch(add2cart(id, Number(qty)));
    history.push("/");
  };
  return (
    <>
      <Ctn handler={handleSubmit} name={name} />
    </>
  );
};

export default ProductCtn;
