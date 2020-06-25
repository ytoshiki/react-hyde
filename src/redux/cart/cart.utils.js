export const addItem = (initialCartItems, newItem) => {
  const existingItem = initialCartItems.find(cartItem => cartItem.id === newItem.id)

  if (existingItem) {
    return initialCartItems.map(cartItem => (cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
  }

  return [...initialCartItems, { ...newItem, quantity: 1 }]
}

export const reduceItemCount = (initialCartItems, cartItemToRemove) => {
  const existingItem = initialCartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  if (existingItem.quantity > 1) {
    return initialCartItems.map(cartItem => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
  } else {
    return initialCartItems
  }
}
