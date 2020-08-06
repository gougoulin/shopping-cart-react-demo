import { combineReducers } from "redux";
import CssReducer from "./cssReducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  css: CssReducer,
  products: productReducer,
});
