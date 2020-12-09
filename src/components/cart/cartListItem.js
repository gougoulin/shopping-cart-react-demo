import React from "react";
import InputQty from "../common/inputQty";
import { useDispatch } from "react-redux";
import { removeItem, update_cartlist_item } from "../../actions/cartAction";

const CartListItem = ({ id, qty, detail }) => {
  const dispatch = useDispatch();
  const { url, title, price } = detail;

  const handleChange = (qty, id) => {
    dispatch(update_cartlist_item(qty, id));
  };
  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(removeItem(id));
  };
  const subTotal = qty * price;
  return (
    <div className="cartlist__item">
      <img className="cartlist__item__image" src={url} alt="product" />
      <div className="cartlist__item__info">
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <div>status: in stock</div>
        <div>
          <label>Qty: </label>
          <InputQty
            type="number"
            handler={handleChange}
            id={id}
            number={qty}
            min="0"
          />
          <a
            className="cartlist__item__remove"
            href="#"
            onClick={(e) => {
              handleClick(e, id);
            }}
          >
            remove
          </a>
        </div>
      </div>
      <div>${Number.parseFloat(subTotal).toFixed(2)}</div>
    </div>
  );
};

export default CartListItem;
