import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductTitle = ({ title, id }) => {
  return (
    <>
      <h4 className="product__card__heading">
        <Link to={"/product/" + id}>{title}</Link>
      </h4>
    </>
  );
};

ProductTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default ProductTitle;
