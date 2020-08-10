import React from "react";
import "../css/style.scss";
import plus from "../asset/svg/plus.svg";
import { useDispatch } from "react-redux";
import {
  toggleLikeProduct,
  openModal,
  updateModalTitle,
} from "../action/productActions";
import ProductModalContent from "../page/productModalContent";
import { putInCart } from "../action/productActions";

function CardProduct(props) {
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
  const data = {
    id: id,
    price: price,
    title: title,
    imgURI: imgURI,
    qty: 1,
  };
  const dispatch = useDispatch();

  const pass = <ProductModalContent data={props.data} />;

  const handlePlusClick = (e, data) => {
    e.stopPropagation();
    console.log("icon plus clicked");
    dispatch(putInCart(data));
  };
  /**
   *
   * @param {*} e: event
   */
  const handleHeartClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLikeProduct(id));
  };
  /**
   *
   * @param {*} e
   * open modal when clicking the product card
   */
  const handleCardClick = (e, payload) => {
    console.log("click event happened, this is just the box", payload);
    dispatch(updateModalTitle("product details"));
    dispatch(openModal(payload));
  };

  const style =
    price < rpp ? "product__price__origin" : "product__price__origin hidden";

  const heartSolid = (
    <div onClick={handleHeartClick}>
      <svg
        className="icon__like"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="heart"
        // class="svg-inline--fa fa-heart fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
        ></path>
      </svg>
    </div>
  );
  const heart = (
    <div onClick={handleHeartClick}>
      <svg
        className="icon__like__no"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="heart"
        // class="svg-inline--fa fa-heart fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
        ></path>
      </svg>
    </div>
  );

  return (
    <div
      className="card__product"
      onClick={(e) => {
        handleCardClick(e, pass);
      }}
    >
      <img src={imgURI} alt={imgAlt} />
      <div className="container__card__detail">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">
          ${price} <span className={style}>RPP: ${rpp}</span>
        </p>

        <svg
          onClick={(e) => {
            handlePlusClick(e, data);
          }}
          className="icon__plus"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          // x="0"
          // y="0"
        >
          <g>
            <path
              d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
            />
          </g>
        </svg>
        {isLike ? heartSolid : heart}
        <div className="container__cardbuttons">
          <button className="button button__small">{buttonLeft}</button>
          <button className="button button__small">{buttonRight}</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
