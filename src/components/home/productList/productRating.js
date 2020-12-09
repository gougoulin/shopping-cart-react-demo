import React from "react";
import PropTypes from "prop-types";
import Stars from "../../common/stars";

const ProductRating = ({ rating, numReviews }) => {
  return (
    <>
      <div className="product__rating">
        <Stars rating={rating} /> {numReviews} reviews
      </div>
    </>
  );
};

ProductRating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number,
};

export default ProductRating;
