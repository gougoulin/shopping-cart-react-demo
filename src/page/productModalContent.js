import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { putInCart } from "../action/productActions";

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

  /**
   * hooks
   */
  const [localState, setLocalState] = useState({
    id: id,
    price: price,
    title: title,
    imgURI: imgURI,
    qty: 1,
  });
  const dispatch = useDispatch();

  /**
   * component
   */
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(localState);
            dispatch(putInCart(localState));
          }}
        >
          <fieldset>
            <legend>choose color</legend>
            <label className="radio__container">
              <input
                type="radio"
                checked={localState.color === "red" ? true : false}
                onChange={() => setLocalState({ ...localState, color: "red" })}
                value="red"
                name="product__color__selector"
              />
              <span>red</span>
            </label>
            <label className="radio__container">
              <input
                type="radio"
                checked={localState.color === "blue" ? true : false}
                onChange={() => setLocalState({ ...localState, color: "blue" })}
                value="blue"
                name="product__color__selector"
              />
              <span>blue</span>
            </label>
            <label className="radio__container">
              <input
                type="radio"
                checked={localState.color === "black" ? true : false}
                onChange={() =>
                  setLocalState({ ...localState, color: "black" })
                }
                value="black"
                name="product__color__selector"
              />
              <span>green</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Size</legend>
            <label className="radio__container">
              <input
                type="radio"
                name="product__size__selector"
                checked={localState.size === "64 GB" ? true : false}
                onChange={() => setLocalState({ ...localState, size: "64 GB" })}
              />
              <span>64 GB</span>
            </label>
            <label className="radio__container">
              <input
                checked={localState.size === "128 GB" ? true : false}
                onChange={() =>
                  setLocalState({ ...localState, size: "128 GB" })
                }
                type="radio"
                name="product__size__selector"
              />
              <span>128 GB</span>
            </label>
            <label className="radio__container">
              <input
                checked={localState.size === "256 GB" ? true : false}
                onChange={() =>
                  setLocalState({ ...localState, size: "256 GB" })
                }
                type="radio"
                name="product__size__selector"
              />
              <span>256 GB</span>
            </label>
          </fieldset>
          <div className="container__product__control">
            <button type="submit" className="button">
              add to cart
            </button>
            <button type="button" className="button">
              place order now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ProductModalContent.propTypes = {};

export default ProductModalContent;
