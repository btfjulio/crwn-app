import CartActionTypes from "./cart.action";

const INITIAL_STATE = {
  active: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
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
