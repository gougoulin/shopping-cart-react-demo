// import Data from "./data.json"; // abandoned, data is from Contentful API now

import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_REQUEST_SUCCESS,
  PRODUCT_DETAIL_REQUEST_FAIL,
} from "./constants";
import Client from "../contentful";

const getProductByID = (targetID) => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST });
      const res = await Client.getEntries({
        content_type: "products",
        // order: "fields.price",
      });
      const data = res.items;

      const products = data.map((item) => {
        return {
          id: item.sys.id,
          ...item.fields,
          url: item.fields.images[0].fields.file.url,
        };
      });

      const matched = products.find(
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
