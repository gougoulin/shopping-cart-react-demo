import React from "react";
import { useDispatch } from "react-redux";
import {
  getFilteredProducts,
  setMinPrice,
} from "../../../actions/filterAction";
import InputQty from "../../common/inputQty";

const MinPrice = () => {
  const dispatch = useDispatch();
  const handler = (minValue) => {
    dispatch(setMinPrice(minValue));
    dispatch(getFilteredProducts());
  };
  return (
    <>
      <InputQty
        handler={handler}
        placeholder="0"
        morestyle=" min__price"
        type="text"
        min="0"
      />
    </>
  );
};

export default MinPrice;
