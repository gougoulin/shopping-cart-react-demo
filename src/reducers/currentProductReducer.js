import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_REQUEST_SUCCESS,
  PRODUCT_DETAIL_REQUEST_FAIL,
  UPDATE_PURCHASE_QTY,
  UPDATE_PURCHASE_QTY_FAIL,
} from "../actions/constants";

const CurrentProductPageReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_DETAIL_REQUEST_SUCCESS:
      return { loading: false, detail: action.payload };
    case PRODUCT_DETAIL_REQUEST_FAIL:
      return { loading: false, errLoad: action.payload };
    case UPDATE_PURCHASE_QTY:
      return { ...state, qtyPurchased: action.payload };
    case UPDATE_PURCHASE_QTY_FAIL:
      return { ...state, errAdd2Cart: action.payload };
    default:
      return state;
  }
};

export default CurrentProductPageReducer;
