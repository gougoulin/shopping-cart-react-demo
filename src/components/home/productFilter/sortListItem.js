import React from "react";
import { useDispatch } from "react-redux";
import { getFilteredProducts } from "../../../actions/filterAction";

const SortListItem = ({ name, isAscend, action }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
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
