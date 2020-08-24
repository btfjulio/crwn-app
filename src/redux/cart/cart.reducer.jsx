import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart, removeItem } from "./cart.utils";

const INITIAL_STATE = {
  active: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ACTIVE:
      return {
        ...state,
        active: !state.active,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
