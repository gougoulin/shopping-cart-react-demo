import {
  SORT_PRICE_ASC,
  SORT_PRICE_DES,
  SORT_RATING_ASC,
  SORT_RATING_DES,
  SORT_REVIEW_ASC,
  SORT_REVIEW_DES,
  MIN_MAX_PRICE,
  MAX_PRICE,
  MIN_PRICE,
  GET_BRANDS,
  BRAND_TOGGLE,
  GET_FILTERED_PRODUCTS,
} from "./constants";
import Client from "../contentful";
// import Data from "../actions/data.json";  // abandoned, data is from Contentful API now

const sortByPrice = (isAscend) => async (dispatch) => {
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
  const sorted = products.sort((a, b) => {
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

const sortByRating = (isAscend) => async (dispatch) => {
  try {
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
    const sorted = products.sort((a, b) => {
      return a.rating - b.rating;
    });
    isAscend
      ? dispatch({ type: SORT_RATING_ASC, payload: sorted })
      : dispatch({ type: SORT_RATING_DES, payload: sorted.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};

const sortByReview = (isAscend) => async (dispatch) => {
  try {
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
    const sorted = products.sort((a, b) => {
      return a.numReviews - b.numReviews;
    });
    isAscend
      ? dispatch({ type: SORT_REVIEW_ASC, payload: sorted })
      : dispatch({ type: SORT_REVIEW_DES, payload: sorted.reverse() });
  } catch (error) {
    console.log(error.message);
  }
};

const minmaxPrice = (min, max) => async (dispatch) => {
  try {
    // const res = await Client.getEntries({
    //   content_type: "products",
    //   // order: "fields.price",
    // });
    // const data = res.items;

    // const products = data.map((item) => {
    //   return {
    //     id: item.sys.id,
    //     ...item.fields,
    //     url: item.fields.images[0].fields.file.url,
    //   };
    // });
    // const filtered = products.filter((item) => {
    //   return item.price >= min && item.price <= max;
    // });
    // dispatch({ type: MIN_MAX_PRICE, payload: filtered });
    dispatch({ type: GET_FILTERED_PRODUCTS });
  } catch (error) {
    console.log(error.message);
  }
};

const setMinPrice = (minValue) => async (dispatch) => {
  try {
    dispatch({ type: MIN_PRICE, payload: minValue });
    dispatch({ type: GET_FILTERED_PRODUCTS });
  } catch (error) {
    console.log(error.message);
  }
};

const setMaxPrice = (maxValue) => async (dispatch) => {
  try {
    dispatch({ type: MAX_PRICE, payload: maxValue });
    dispatch({ type: GET_FILTERED_PRODUCTS });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 *
 * @param {*} brand
 * toggle the checked status of the BRAND
 */
const toggleBrand = (brand) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_TOGGLE, payload: brand });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * get all brand names in the filter
 * generate the brand filter list components
 * To initialize the Filter section in home page
 */
const getBrands = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_BRANDS,
      payload: [
        { name: "apple", isChecked: false },
        { name: "dyson", isChecked: false },
        { name: "google", isChecked: false },
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
const getFilteredProducts = () => async (dispatch) => {
  try {
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
    const _products = products;
    dispatch({ type: GET_FILTERED_PRODUCTS, payload: _products });
  } catch (error) {}
};

export {
  sortByPrice,
  sortByRating,
  sortByReview,
  minmaxPrice,
  setMinPrice,
  setMaxPrice,
  getBrands,
  toggleBrand,
  getFilteredProducts,
};
