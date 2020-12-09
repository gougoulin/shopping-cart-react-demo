import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../actions/filterAction";
import BrandListItem from "./brandListItem";

const BrandList = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.filter.brands);
  useEffect(() => {
    dispatch(getBrands());
    return () => {};
  }, []);
  const brandElemList =
    brands &&
    brands.map((item) => (
      <BrandListItem
        key={"key_" + item.name}
        brand={item.name}
        status={item.isChecked}
      />
    ));
  return <>{brandElemList}</>;
};

export default BrandList;
