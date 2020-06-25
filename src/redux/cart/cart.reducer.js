import { addItem, reduceItemCount } from "./cart.utils"

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }
    case "REMOVE_ITEMS":
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
      }
    case "REDUCE_QUANTITY":
      return {
        ...state,
        cartItems: reduceItemCount(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
