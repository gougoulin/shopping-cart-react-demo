export const FETCH_DATA = "FETCH_DATA";
export const INITIAL_PRODUCTS = "INITIAL_PRODUCTS";
export const TOGGLE_LIKE_PRODUCT = "TOGGLE_LIKE_PRODUCT";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const PUT_IN_CART = "PUT_IN_CART";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const UPDATE_MODAL_TITLE = "UPDATE_MODAL_TITLE";

export const fetchData = () => {
  return async (dispatch) => {
    const res = await fetch("./data.js");
    const data = res.json();
    dispatch({ type: INITIAL_PRODUCTS, payload: data });
    console.log("add products to state successfully!", data);
  };
};
export const toggleLikeProduct = (id_product) => {
  return { type: "TOGGLE_LIKE_PRODUCT", payload: id_product };
};
export const toggleMenu = () => {
  console.log("action running");
  return { type: TOGGLE_MENU };
};
export const putInCart = () => {
  return { type: PUT_IN_CART };
};
export const openModal = (element) => {
  return { type: OPEN_MODAL, payload: element };
};
export const closeModal = (element) => {
  return { type: CLOSE_MODAL };
};
export const updateModalTitle = (title) => {
  return { type: UPDATE_MODAL_TITLE, payload: title };
};
