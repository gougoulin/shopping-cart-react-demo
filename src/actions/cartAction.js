import {
  CARTLIST_ITEM_UPDATE,
  CARTLIST_ITEM_UPDATE_FAIL,
  GET_CARTLIST_SUBTOTAL,
  GET_CARTLIST_SUM_PRICE,
  ITEM_REMOVE,
} from "./constants";

const update_cartlist_item = (qty, id) => (dispatch) => {
  try {
    if (Number.parseInt(qty) === 0) {
    }
    Number.parseInt(qty) === 0
      ? dispatch({ type: ITEM_REMOVE, payload: id })
      : dispatch({ type: CARTLIST_ITEM_UPDATE, payload: { id, qty } });
    dispatch({ type: GET_CARTLIST_SUBTOTAL });
    dispatch({ type: GET_CARTLIST_SUM_PRICE });
  } catch (err) {
    dispatch({ type: CARTLIST_ITEM_UPDATE_FAIL, payload: err.message });
  }
};

const removeItem = (id) => (dispatch) => {
  dispatch({ type: ITEM_REMOVE, payload: id });
};

export { update_cartlist_item, removeItem };
