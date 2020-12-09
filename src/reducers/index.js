import HeaderReducer from "./header";
import CurrentProductReducer from "./currentProductReducer";
import FooterReducer from "./footer";
import FilterReducer from "./filter";
import { combineReducers } from "redux";
import ProductListReducer from "./preoductListReducer";
import CartListReducer from "./cartListReducer";

export default combineReducers({
  footer: FooterReducer,
  filter: FilterReducer,
  header: HeaderReducer,
  productList: ProductListReducer,
  currentProduct: CurrentProductReducer,
  cartList: CartListReducer,
});
