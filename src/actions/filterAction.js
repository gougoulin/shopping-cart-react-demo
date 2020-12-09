import {
  SORT_PRICE_ASC,
  SORT_PRICE_DES,
  SORT_RATING_ASC,
  SORT_RATING_DES,
  SORT_REVIEW_ASC,
  SORT_REVIEW_DES,
  MIN_MAX_PRICE,
  SELECT_BY_BRANDS,
  MAX_PRICE,
  MIN_PRICE,
  GET_BRANDS,
  BRAND_TOGGLE,
  GET_FILTERED_PRODUCTS,
} from "./constants";
import Data from "../actions/data.json";

const sortByPrice = (isAscend) => (dispatch) => {
  const sorted = Data.products.sort((a, b) => {
    return a.price - b.price;
  });
  try {
    isAscend
      ? dispatch({ type: SORT_PRICE_ASC, payload: sorted })
      : dispatch({ type: SORT_PRICE_DES, payload: sorted.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};

const sortByRating = (isAscend) => (dispatch) => {
  try {
    const sorted = Data.products.sort((a, b) => {
      return a.rating - b.rating;
    });
    isAscend
      ? dispatch({ type: SORT_RATING_ASC, payload: sorted })
      : dispatch({ type: SORT_RATING_DES, payload: sorted.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};

const sortByReview = (isAscend) => (dispatch) => {
  try {
    const sorted = Data.products.sort((a, b) => {
      return a.numReviews - b.numReviews;
    });
    isAscend
      ? dispatch({ type: SORT_REVIEW_ASC, payload: sorted })
      : dispatch({ type: SORT_REVIEW_DES, payload: sorted.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};

const minmaxPrice = (min, max) => (dispatch) => {
  try {
    const filtered = Data.products.filter((item) => {
      return item.price >= min && item.price <= max;
    });
    dispatch({ type: MIN_MAX_PRICE, payload: filtered });
  } catch (error) {
    console.log(error.message);
  }
};

const setMinPrice = (minValue) => (dispatch) => {
  try {
    dispatch({ type: MIN_PRICE, payload: minValue });
  } catch (error) {
    console.log(error.message);
  }
};

const setMaxPrice = (maxValue) => (dispatch) => {
  try {
    dispatch({ type: MAX_PRICE, payload: maxValue });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 *
 * @param {*} brand
 * toggle the checked status of the BRAND
 */
const toggleBrand = (brand) => (dispatch) => {
  try {
    dispatch({ type: BRAND_TOGGLE, payload: brand });
  } catch (error) {
    console.log(error.message);
  }
};
/**
 *
 * @param {*} brand
 * toggle the checked status of the BRAND
 * send products data and brand name to the Filter Reducer
 */
const selectByBrands = (brands) => (dispatch) => {
  try {
    const products = Data.products;

    // dispatch({
    //   type: SELECT_BY_BRANDS,
    //   // if no brand is selected, return all products
    //   payload: selectedProducts ? selectedProducts : products,
    // });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * get all brand names in the filter
 * generate the brand filter list components
 * To initialize the Filter section in home page
 */
const getBrands = () => (dispatch) => {
  try {
    dispatch({
      type: GET_BRANDS,
      payload: [
        { name: "apple", isChecked: false },
        { name: "dyson", isChecked: false },
        { name: "beats", isChecked: false },
        { name: "dell", isChecked: false },
        { name: "samsung", isChecked: false },
      ],
    });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * whenever filter state changes, get products to be shown on home page
 */
const getFilteredProducts = () => (dispatch) => {
  try {
    const products = Data.products;
    dispatch({ type: GET_FILTERED_PRODUCTS, payload: products });
  } catch (error) {}
};

export {
  sortByPrice,
  sortByRating,
  sortByReview,
  minmaxPrice,
  setMinPrice,
  setMaxPrice,
  selectByBrands,
  getBrands,
  toggleBrand,
  getFilteredProducts,
};
