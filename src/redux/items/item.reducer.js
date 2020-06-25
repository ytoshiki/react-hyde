import { itemData } from "./item.data"

const INITIAL_STATE = {
  items: itemData,
  itemsToDisplay: []
}

const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_ITEMS":
      return {
        ...state,
        itemsToDisplay: action.payload
      }
    default:
      return state
  }
}

export default ItemReducer
