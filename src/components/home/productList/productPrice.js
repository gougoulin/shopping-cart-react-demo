import React from "react";
import PropTypes from "prop-types";

const ProductPrice = ({ price }) => {
  return (
    <div className="product__price">${Number.parseFloat(price).toFixed(2)}</div>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.number,
};

export default ProductPrice;
