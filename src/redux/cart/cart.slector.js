import { createSelector } from "reselect"

const selectCart = state => state.cart

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

export const selectCartTotalPrice = createSelector([selectCartItems], cartItems => cartItems.reduce((accumalateQuantity, cartItem) => accumalateQuantity + cartItem.price * cartItem.quantity, 0))

export const selectCartQuantity = createSelector([selectCartItems], cartItems => cartItems.reduce((accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity, 0))
