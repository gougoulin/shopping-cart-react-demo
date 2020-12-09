import Data from "./data.json";
import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  UPDATE_PURCHASE_QTY,
  UPDATE_PURCHASE_QTY_FAIL,
  UPDATE_CART_FROM_LOCAL,
  GET_CARTLIST_SUBTOTAL,
  GET_CARTLIST_SUM_PRICE,
} from "./constants";

const add2cart = (targetID, qty) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ADD_TO_CART,
        payload: { productID: targetID, qty: qty ? qty : 1 },
      });
    } catch (err) {
      dispatch({ type: ADD_TO_CART_FAIL, payload: err.message });
    }
  };
};

const updateQtyPurchased = (qty) => {
  return (dispatch) => {
    try {
      dispatch({ type: UPDATE_PURCHASE_QTY, payload: qty });
      dispatch({ type: GET_CARTLIST_SUBTOTAL });
      dispatch({ type: GET_CARTLIST_SUM_PRICE });
    } catch (err) {
      dispatch({ type: UPDATE_PURCHASE_QTY_FAIL, payload: err.message });
    }
  };
};

const initCart = () => {
  /**
   * get data from localStorage
   * will only be triggered when visiting the first time (null / undefined state.cartList, see /pages/home.js line 14)
   */
  return (dispatch) => {
    const localCart = JSON.parse(localStorage.getItem("cartList"));
    if (localCart) {
      localCart.idList.forEach((elem, indx) => {
        dispatch(add2cart(elem, localCart.qtyList[indx]));
      });
    }
  };
};

const updateCartFromLocal = (localCart) => (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_FROM_LOCAL, payload: localCart });
    dispatch({ type: GET_CARTLIST_SUBTOTAL });
    dispatch({ type: GET_CARTLIST_SUM_PRICE });
  } catch (error) {
    console.log(error.message);
  }
};

const getSubtotals = () => (dispatch) => {
  try {
    dispatch({ type: GET_CARTLIST_SUBTOTAL });
    dispatch({ type: GET_CARTLIST_SUM_PRICE });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const getSumPrice = () => (dispatch) => {
  try {
    dispatch({ type: GET_CARTLIST_SUM_PRICE });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export {
  add2cart,
  updateQtyPurchased,
  initCart,
  updateCartFromLocal,
  getSubtotals,
  getSumPrice,
};
