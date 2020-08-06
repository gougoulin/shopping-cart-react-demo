export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT":
      return { ...state, products: payload };
  }
};
