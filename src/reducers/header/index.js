import { combineReducers } from "redux";
import LogoReducer from "./logoReducer";
import NavsReducer from "./navsReducer";
import NumCartReducer from "./numCartReducer";
// import NavbarReducer from "navbarReducer.js";
// import NavItemReducer from "navItemReducer.js";
// import NavItemCartReducer from "navItemCartReducer.js";
// import NavListReducer from "navList.js";

export default combineReducers({
  logo: LogoReducer,
  navs: NavsReducer,
  numCart: NumCartReducer,
  //   navbar: NavbarReducer,
  //   navItem: NavItemReducer,
  //   navItemCart: NavItemCartReducer,
  //   navList: NavListReducer,
});
