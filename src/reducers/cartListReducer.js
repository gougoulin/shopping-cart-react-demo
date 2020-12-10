import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  CARTLIST_ITEM_UPDATE,
  CARTLIST_ITEM_UPDATE_FAIL,
  ITEM_REMOVE,
  UPDATE_CART_FROM_LOCAL,
  GET_CARTLIST_SUM_PRICE,
  GET_CARTLIST_SUBTOTAL,
} from "../actions/constants";
// import Data from "../actions/data.json"; // abandoned, data is from Contentful API now

const CartListReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      /**
       * 3 arrays used to store productID, its, and details qty respectively
       */
      let newCartItemIdList, newCartItemQtyList, newCartItemDetailList;
      /**
       * fetch the product details
       */
      const currentDetail = action.payload.products.find(
        (item) => item.id.toString() === action.payload.productID.toString()
      );
      /**
       * empty cart, put in the new item directly
       */
      if (state.cartItemIdList === undefined) {
        return {
          total: action.payload.qty,
          cartItemIdList: [action.payload.productID],
          cartItemQtyList: [action.payload.qty],
          cartItemDetailList: [currentDetail],
          subTotals: [action.payload.qty * currentDetail.price],
        };
      }
      /**
       * not empty, find is productID exist
       * yes, then add qty to previous
       * no, push the new item into the list
       */
      const idIndex = state.cartItemIdList.indexOf(action.payload.productID);

      if (idIndex !== -1) {
        newCartItemIdList = [...state.cartItemIdList];
        newCartItemQtyList = [...state.cartItemQtyList];
        newCartItemQtyList[idIndex] += action.payload.qty;
        newCartItemDetailList = [...state.cartItemDetailList];
      } else {
        newCartItemIdList = [...state.cartItemIdList, action.payload.productID];
        newCartItemQtyList = [...state.cartItemQtyList, action.payload.qty];
        newCartItemDetailList = [...state.cartItemDetailList, currentDetail];
      }
      localStorage.setItem(
        "cartList",
        JSON.stringify({
          idList: newCartItemIdList,
          qtyList: newCartItemQtyList,
          detailList: newCartItemDetailList,
        })
      );
      return {
        ...state,
        total: newCartItemQtyList.reduce((accu, curr) => accu + curr),
        cartItemQtyList: newCartItemQtyList,
        cartItemIdList: newCartItemIdList,
        cartItemDetailList: newCartItemDetailList,
      };
    case ADD_TO_CART_FAIL:
      return { loading: false, detail: action.payload };
    case CARTLIST_ITEM_UPDATE:
      let target = state.cartItemIdList.indexOf(action.payload.id);
      if (target === -1) return state;
      const updateCartItemQtyList = state.cartItemQtyList.map((item, idx) => {
        return idx === target ? Number(action.payload.qty) : item;
      });
      localStorage.setItem(
        "cartList",
        JSON.stringify({
          idList: state.cartItemIdList,
          qtyList: updateCartItemQtyList,
          detailList: state.cartItemDetailList,
        })
      );
      return {
        ...state,
        cartItemQtyList: updateCartItemQtyList,
        total: updateCartItemQtyList.reduce((a, b) => a + b, 0),
      };
    case CARTLIST_ITEM_UPDATE_FAIL:
      return { ...state, err: action.payload };
    case ITEM_REMOVE:
      // if (state.total < 1) {
      //   console.log("found total items is < 0");
      //   localStorage.removeItem("cartList");
      //   return {
      //     ...state,
      //     total: 0,
      //     cartItemIdList: [],
      //     cartItemQtyList: [],
      //     cartItemDetailList: [],
      //   };
      // }
      const targetInd = state.cartItemIdList.indexOf(action.payload);
      if (targetInd === -1) return state;
      const removedCartItemIdList = [
        ...state.cartItemIdList.slice(0, targetInd),
        ...state.cartItemIdList.slice(
          targetInd + 1,
          state.cartItemIdList.length
        ),
      ];
      const removedCartItemQtyList = [
        ...state.cartItemQtyList.slice(0, targetInd),
        ...state.cartItemQtyList.slice(
          targetInd + 1,
          state.cartItemQtyList.length
        ),
      ];
      const removedCartItemDetailList = [
        ...state.cartItemDetailList.slice(0, targetInd),
        ...state.cartItemDetailList.slice(
          targetInd + 1,
          state.cartItemIdList.length
        ),
      ];
      localStorage.setItem(
        "cartList",
        JSON.stringify({
          idList: removedCartItemIdList,
          qtyList: removedCartItemQtyList,
          detailList: removedCartItemDetailList,
        })
      );
      return {
        ...state,
        cartItemIdList: removedCartItemIdList,
        cartItemQtyList: removedCartItemQtyList,
        cartItemDetailList: removedCartItemDetailList,
        total:
          removedCartItemQtyList.legnth ||
          removedCartItemQtyList.reduce((a, b) => a + b, 0),
      };
    case UPDATE_CART_FROM_LOCAL:
      return {
        ...state,
        cartItemIdList: action.payload.idList,
        cartItemQtyList: action.payload.qtyList,
        cartItemDetailList: action.payload.detailList,
        total: action.payload.qtyList.reduce((a, b) => a + b, 0),
      };
    case GET_CARTLIST_SUBTOTAL:
      const subTotals = state.cartItemQtyList.map(
        (itm, idx) => itm * state.cartItemDetailList[idx].price
      );
      return { ...state, subTotals };
    case GET_CARTLIST_SUM_PRICE:
      return { ...state, sumPrice: state.subTotals.reduce((a, b) => a + b) };
    default:
      return state;
  }
};

export default CartListReducer;
