import React from "react";
import BrandList from "./brandList";
import Filteritemheading from "./filteitemrheading";
import Filterlistitem from "./filterlistitem";
import MaxPrice from "./maxPrice";
import MinPrice from "./minPrice";
import PriceBtn from "./priceBtn";
import SortList from "./sortList";
import Totalnum from "./totalnum";
import ResetBtn from "./resetBtn";
const ProductFilter = () => {
  return (
    <>
      <div className="aside__sticky">
        <div className="filterlist">
          <Totalnum />
          <Filterlistitem>
            <Filteritemheading name="sort" />
            <SortList />
          </Filterlistitem>
          <Filterlistitem>
            <Filteritemheading name="Price" />
            <MinPrice />
            <span> to</span>
            <MaxPrice />
            <PriceBtn />
            <ResetBtn />
          </Filterlistitem>
          <Filterlistitem>
            <Filteritemheading name="Brand" />
            <BrandList />
          </Filterlistitem>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
