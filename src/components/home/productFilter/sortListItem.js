import React from "react";
import { useDispatch } from "react-redux";
import { EXITED } from "react-transition-group/Transition";
import {
  getFilteredProducts,
  sortByPrice,
} from "../../../actions/filterAction";

const SortListItem = ({ name, isAscend, action }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(action(isAscend));
    dispatch(getFilteredProducts());
  };
  return (
    <>
      <a href="#" onClick={handleChange} className="filterlist__link">
        {name}
      </a>
    </>
  );
};

export default SortListItem;
