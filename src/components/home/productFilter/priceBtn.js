import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredProducts,
  minmaxPrice,
} from "../../../actions/filterAction";
import Btn from "../../common/btn";

const PriceBtn = ({ btnName }) => {
  const { minPrice, maxPrice } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(minmaxPrice(minPrice, maxPrice));
    dispatch(getFilteredProducts());
  };
  return (
    <>
      <Btn handler={handleClick} btnName="apply" />
    </>
  );
};

export default PriceBtn;
