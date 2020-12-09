import {
  DATA_RQEUST,
  DATA_FETCH_FAIL,
  DATA_FETCH_SUCCESS,
} from "../actions/constants";

const ProductListReducer = (state = {}, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { loading: false, products: action.payload };
    case DATA_FETCH_FAIL:
      return { loading: false, err: action.payload };
    case DATA_RQEUST:
      return { loading: true };
    default:
      return state;
  }
};

export default ProductListReducer;
