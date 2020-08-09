import React from "react";
import PropTypes from "prop-types";

function ProductModalContent(props) {
  const {
    id,
    price,
    rpp,
    title,
    buttonLeft,
    buttonRight,
    imgURI,
    imgAlt,
    isLike,
  } = props.data;
  return (
    <div className="product">
      <div className="container__product__images">
        <img src={imgURI} alt="product" />
      </div>
      <div className="container__product__info">
        <div className="h3">{title}</div>
        <div className="bold">
          Now: ${price} <span>Normal price: </span>
          <span className="price__highlight">${rpp}</span>
        </div>
        <div></div>
        <div>
          <fieldset>
            <legend>choose color</legend>
            <label className="radio__container">
              <input type="radio" name="product__color__selector" />
              <span>red</span>
            </label>
            <label className="radio__container">
              <input type="radio" name="product__color__selector" />
              <span>blue</span>
            </label>
            <label className="radio__container">
              <input type="radio" name="product__color__selector" />
              <span>green</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Size</legend>
            <label className="radio__container">
              <input type="radio" name="product__size__selector" />
              <span>64 GB</span>
            </label>
            <label className="radio__container">
              <input type="radio" name="product__size__selector" />
              <span>128 GB</span>
            </label>
            <label className="radio__container">
              <input type="radio" name="product__size__selector" />
              <span>256 GB</span>
            </label>
          </fieldset>
        </div>
        <div className="container__product__control">
          <button className="button">add to cart</button>
          <button className="button">place order now</button>
        </div>
      </div>
    </div>
  );
}

ProductModalContent.propTypes = {};

export default ProductModalContent;
