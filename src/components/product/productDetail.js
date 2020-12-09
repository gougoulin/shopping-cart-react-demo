import React from "react";
import { useDispatch } from "react-redux";
import { add2cart, updateQtyPurchased } from "../../actions/add2cartAction";
import InputQty from "../common/inputQty";
import Stars from "../common/stars";
import ProductCtn from "./productCtn";

const ProductDetail = ({ detail }) => {
  const dispatch = useDispatch();
  const { url, rating, numReviews, price, description, id } = detail;
  const handleInput = (value) => {
    try {
      dispatch(updateQtyPurchased(value));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="product__mainimage__box">
        <img src={url} alt="product" />
      </div>
      <div className="prodcut__profile">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <Stars rating={rating} />
        <p>{numReviews} Customer reviws</p>
        <p>Price: ${price.toFixed(2)}</p>
        <div>status: in stock</div>
        <div>
          <label>Qty: </label>
          <InputQty
            handler={handleInput}
            placeholder={1}
            type="number"
            min="0"
          />
        </div>
        <ProductCtn name="Add to cart" id={id} target="/" />
      </div>
      <div className="product__discription">
        <h3>discription: </h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductDetail;
