import React from "react";
import PropTypes from "prop-types";
import ProductPrice from "./productPrice";
import ProductImage from "./productImage";
import ProductTitle from "./productTitle";
import ProductRating from "./productRating";

const ProductListItem = ({
  url,
  price,
  title,
  rating,
  numReviews,
  id,
  isLike,
}) => {
  return (
    <div className="homepage__product__card">
      <ProductImage url={url} isLike={isLike} />
      <div className="product__card__body">
        <ProductPrice price={price} />
        <ProductTitle title={title} id={id} />
        <ProductRating rating={rating} numReviews={numReviews} />
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
  url: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  rating: PropTypes.number,
  numReviews: PropTypes.number,
  id: PropTypes.string,
};

export default ProductListItem;
