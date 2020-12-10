import React from "react";
import { useDispatch } from "react-redux";
import {
  getFilteredProducts,
  toggleBrand,
} from "../../../actions/filterAction";

const BrandListItem = ({ brand, status }) => {
  // const brands = useSelector((state) => state.filter.brands);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(toggleBrand(brand));
    // let checkedBrands = brands || brands.filter((item) => item.isChecked);
    dispatch(getFilteredProducts());
  };
  return (
    <>
      <div className="brandlistitem">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={status}
          name=""
          id=""
        />
        <span>{brand}</span>
      </div>
    </>
  );
};

export default BrandListItem;
