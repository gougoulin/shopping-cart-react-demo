import React from "react";
import PropTypes from "prop-types";
import Like from "../../common/heart";

const ProductImage = ({ url, isLike }) => {
  return (
    <div className="product__card__image">
      <img src={url} alt="product" />
      <Like isLike={isLike} />
    </div>
  );
};

ProductImage.propTypes = {
  url: PropTypes.string,
};

export default ProductImage;
