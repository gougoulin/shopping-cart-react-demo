import {
  INITIAL_PRODUCTS,
  TOGGLE_LIKE_PRODUCT,
  TOGGLE_MENU,
  PUT_IN_CART,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_MODAL_TITLE,
} from "../action/productActions";
import earphone from "../asset/img/earphone.jpg";
import iphone11_blk from "../asset/img/iphone11_black.jpg";

const init = {
  products: [
    {
      id: 0,
      title: "MOBI earphone",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 125.99,
      rpp: 200.0,
      isLike: false,
      variant: [],
      uri: earphone,
    },
    {
      id: 1,
      title: "iPhone 11 Black",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 599.99,
      rpp: 899.0,
      isLike: false,
      variant: [],
      uri: iphone11_blk,
    },
    {
      id: 2,
      title: "MOBI earphone",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 125.99,
      rpp: 200.0,
      isLike: false,
      variant: [],
      uri: earphone,
    },
    {
      id: 3,
      title: "MOBI earphone",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 125.99,
      rpp: 200.0,
      isLike: false,
      variant: [],
      uri: earphone,
    },
    {
      id: 4,
      title: "MOBI earphone",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 125.99,
      rpp: 200.0,
      isLike: false,
      variant: [],
      uri: earphone,
    },
    {
      id: 5,
      title: "MOBI earphone",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 125.99,
      rpp: 200.0,
      isLike: false,
      variant: [],
      uri: earphone,
    },
    {
      id: 6,
      title: "MOBI earphone",
      description: "awesome brand new earphone, your first choice",
      quantity: 20,
      price: 125.99,
      rpp: 200.0,
      isLike: false,
      variant: [],
      uri: earphone,
    },
  ],
  cart: [],
  likes: [],
  isMenuClicked: false,
  isModalVisible: false,
  modalContent: null,
  modaltitle: "",
};

/**
 *
 * @param {*} state
 * {
 *   products: [{}, {}, ...],
 *   cart: {},
 *   likes: [product obj, ...],
 * }
 * @param {*} action - redux action object {type, payload}
 */
const productReducer = (state = init, action) => {
  switch (action.type) {
    case INITIAL_PRODUCTS:
      return { ...state, products: action.payload };
    case TOGGLE_LIKE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isLike: !item.isLike };
          } else {
            return item;
          }
        }),
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuClicked: !state.isMenuClicked,
      };
    case PUT_IN_CART:
      /**
       * {
       * id: ,
       * title: ,
       * note: ,
       * qty: ,
       * price: ,
       * }
       */
      let newCart = [...state.cart];
      if (state.cart.length === 0) {
        newCart.push(action.payload);
      } else {
        const _ids = state.cart.map((element) => {
          return element.id;
        });
        const _id = _ids.indexOf(action.payload.id);
        console.log("_ids: ", _ids, _id);
        if (_id > -1) {
          newCart[_id].qty = state.cart[_id].qty + action.payload.qty;
        } else {
          newCart.push(action.payload);
        }
      }
      console.log(newCart);
      return {
        ...state,
        cart: newCart,
      };
    case UPDATE_MODAL_TITLE:
      return {
        ...state,
        modalTitle: action.payload,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalVisible: true,
        modalContent: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalVisible: false,
        modalContent: action.payload,
        modalTitle: "",
      };
    default:
      return state;
  }
};

export default productReducer;
