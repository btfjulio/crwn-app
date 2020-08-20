
import { CartActionTypes } from "./cart.types";

export const toggleCartActive = () => ({
  type: CartActionTypes.TOGGLE_CART_ACTIVE
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
