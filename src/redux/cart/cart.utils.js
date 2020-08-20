export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
  if (existingCartItem) {
    return cartItems.map((cartItem) => (
      cartItem.id === cartItemToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ))
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => (
  cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
)

export const removeItem = (cartItems, cartItemToRemove) => {
  const currentQuantity = cartItemToRemove.quantity
  if (currentQuantity > 1) {
    return cartItems.map(cartItem => (
      cartItem.id === cartItemToRemove.id ?
      { ...cartItem, quantity: currentQuantity - 1 } : cartItem
    ))
  } else {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
}
