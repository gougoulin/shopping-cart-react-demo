import Data from "./data.json";
import { DATA_RQEUST, DATA_FETCH_SUCCESS, DATA_FETCH_FAIL } from "./constants";

const getProductList = () => {
  return (dispatach) => {
    try {
      dispatach({ type: DATA_RQEUST });
      dispatach({ type: DATA_FETCH_SUCCESS, payload: Data.products });
    } catch (err) {
      dispatach({ type: DATA_FETCH_FAIL, payload: err.message });
    }
  };
};

export { getProductList };
