import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  active: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ACTIVE:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

export default cartReducer;
