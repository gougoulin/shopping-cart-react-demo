import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubtotals } from "../../actions/add2cartAction";
import CartCtn from "./cartCtn";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const sumPrice = cartList.sumPrice;
  const prices =
    cartList || cartList.cartItemDetailList.map((item) => item.price);
  const totalNum = cartList.total;

  useEffect(() => {
    dispatch(getSubtotals(cartList.cartItemQtyList, prices));
    return () => {};
  }, []);

  return (
    <div className="cart__checkout">
      <h3>
        Subtotal (<span>{totalNum}</span> Items) :
      </h3>
      <p>${Number.parseFloat(sumPrice).toFixed(2)}</p>
      <div>
        <CartCtn name="proceed to checkout" />
      </div>
    </div>
  );
};

export default Checkout;
