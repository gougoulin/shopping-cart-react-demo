import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredProducts,
  setMaxPrice,
} from "../../../actions/filterAction";
import InputQty from "../../common/inputQty";

const MaxPrice = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.maxPrice);
  const handler = (maxValue) => {
    dispatch(setMaxPrice(maxValue));
    dispatch(getFilteredProducts());
  };
  return (
    <>
      <InputQty
        handler={handler}
        placeholder="8888"
        morestyle=" max__price"
        type="text"
        current={value}
      />
    </>
  );
};

export default MaxPrice;
