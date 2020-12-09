import Data from "./data.json";
import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_REQUEST_SUCCESS,
  PRODUCT_DETAIL_REQUEST_FAIL,
} from "./constants";

const getProductByID = (targetID) => {
  return (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST });
      const matched = Data.products.find(
        (item) => item.id.toString() === targetID.toString()
      );
      if (matched) {
        dispatch({ type: PRODUCT_DETAIL_REQUEST_SUCCESS, payload: matched });
      } else {
        throw Error(`Can't find product Id ${targetID}`);
      }
    } catch (err) {
      dispatch({ type: PRODUCT_DETAIL_REQUEST_FAIL, payload: err.message });
    }
  };
};

export { getProductByID };
