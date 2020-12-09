import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartFromLocal } from "../../actions/add2cartAction";
import CartListItem from "./cartListItem";

const CartList = () => {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  let ids = [],
    qtys = [],
    details = [];
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cartList"));
    if (localCart || !cartList) {
      dispatch(updateCartFromLocal(localCart));
    }
    return () => {
      // cleanup;
    };
  }, []);

  if (!cartList || Object.keys(cartList).length === 0) {
    const tmp = JSON.parse(localStorage.getItem("cartList"));
    ids = tmp.idList;
    qtys = tmp.qtyList;
    details = tmp.detailList;
  } else {
    ids = cartList.cartItemIdList;
    qtys = cartList.cartItemQtyList;
    details = cartList.cartItemDetailList;
  }
  const elemCartList =
    ids &&
    ids.map((elem, indx) => {
      return (
        <CartListItem
          key={elem}
          id={elem}
          qty={qtys[indx]}
          detail={details[indx]}
        />
      );
    });
  return <>{elemCartList.reverse()}</>;
};

export default CartList;
