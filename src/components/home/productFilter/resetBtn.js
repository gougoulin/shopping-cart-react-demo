import React from "react";
import { useDispatch } from "react-redux";
import { FILTER_RESET } from "../../../actions/constants";
import { getFilteredProducts } from "../../../actions/filterAction";
import Btn from "../../common/btn";

const ResetBtn = ({ btnName }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: FILTER_RESET });
  };
  return (
    <>
      <Btn handler={handleClick} btnName="reset" />
    </>
  );
};

export default ResetBtn;
