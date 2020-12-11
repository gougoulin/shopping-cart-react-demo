import {
  BRAND_TOGGLE,
  FILTER_RESET,
  GET_BRANDS,
  // INTERSECT_FILTER,
  MAX_PRICE,
  MIN_MAX_PRICE,
  MIN_PRICE,
  // SELECT_BY_BRANDS,
  // SORT_INTERSECT_FILTER,
  SORT_PRICE_ASC,
  SORT_PRICE_DES,
  SORT_RATING_ASC,
  SORT_RATING_DES,
  SORT_REVIEW_ASC,
  SORT_REVIEW_DES,
  GET_SELECTED_BRANDS,
  GET_FILTERED_PRODUCTS,
} from "../../actions/constants";

const FilterReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_RESET:
      const brands = state.brands.map((item) => {
        item.isChecked = false;
        return item;
      });
      return { brands, minPrice: "", maxPrice: "" };

    // sort filters
    case SORT_PRICE_ASC:
      return { ...state, sorted: action.payload };
    case SORT_PRICE_DES:
      return { ...state, sorted: action.payload };
    case SORT_RATING_ASC:
      return { ...state, sorted: action.payload };
    case SORT_RATING_DES:
      return { ...state, sorted: action.payload };
    case SORT_REVIEW_ASC:
      return { ...state, sorted: action.payload };
    case SORT_REVIEW_DES:
      return { ...state, sorted: action.payload };

    // price min max filter
    case MIN_PRICE:
      return { ...state, minPrice: action.payload };
    case MAX_PRICE:
      return { ...state, maxPrice: action.payload };
    case MIN_MAX_PRICE:
      return { ...state, screened: action.payload };

    // brand checkboxs
    case GET_BRANDS:
      return { ...state, brands: action.payload };
    case BRAND_TOGGLE:
      // toggle the checked status when the brand is equal to action.payload
      return {
        ...state,
        brands: state.brands.map((item) =>
          item.name === action.payload
            ? { name: item.name, isChecked: !item.isChecked }
            : item
        ),
      };
    case GET_SELECTED_BRANDS:
      /**
       * payload has all products data and
       */
      return { ...state, selectedBrands: action.payload };

    // finally get displayed products
    /**
     * default: display contains prdocuts as is get from server
     */
    case GET_FILTERED_PRODUCTS:
      const products = state.sorted
        ? state.sorted
        : state.productList
        ? state.productList.products
        : action.payload;
      const updateDisplay = products.filter((item) => {
        let result = true;
        if (Number(state.minPrice) > Number(state.maxPrice)) {
          console.log("Error: min price is larger than max price");
          return true;
        }
        if (state.minPrice) {
          result = Number(item.price) >= Number(state.minPrice) && result;
        }
        if (state.maxPrice) {
          result = Number(item.price) <= Number(state.maxPrice) && result;
        }
        return result;
      });
      /**
       * if all checkboxes are not checked, do nothing
       * pick up all checked brands
       */
      const checkedBrands = state.brands.filter((item) => item.isChecked);

      const selectedProductsByBrand =
        checkedBrands.length > 0
          ? updateDisplay.filter((item) => {
              // to check if keeping this product or NOT
              const items = checkedBrands.filter((brand) =>
                item.title.toLowerCase().includes(brand.name.toLowerCase())
              );
              // yes is an array contain the checkedBrands
              // if this array is empty, return false; otherwise return true
              return items.length > 0;
            })
          : updateDisplay;
      return { ...state, display: selectedProductsByBrand };

    // case INTERSECT_FILTER:
    //   let setScreened = new Set([...state.screened]);
    //   let setSelected = new Set([...state.selected]);
    //   const intersected = setScreened.filter((item) => setSelected.has(item));
    //   return { ...state, intersected };
    // case SORT_INTERSECT_FILTER:
    //   let setSort = new Set([...state.sorted]);
    //   let setFiltered = new Set([...state.intersected]);
    //   const sortIntersected = setSort.filter((item) => setFiltered.has(item));
    //   return { ...state, sortIntersected };
    // case SELECT_BY_BRANDS:
    //   return { ...state, selected: action.payload };

    default:
      return state;
  }
};

export default FilterReducer;
