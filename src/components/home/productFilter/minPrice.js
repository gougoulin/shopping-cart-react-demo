import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredProducts,
  setMinPrice,
} from "../../../actions/filterAction";
import InputQty from "../../common/inputQty";

const MinPrice = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.minPrice);
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
        current={value}
      />
    </>
  );
};

export default MinPrice;
