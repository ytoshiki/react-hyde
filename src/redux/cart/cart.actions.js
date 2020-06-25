export const addItem = item => ({
  type: "ADD_ITEMS",
  payload: item
})

export const removeItem = itemId => ({
  type: "REMOVE_ITEMS",
  payload: itemId
})

export const reduceQuantity = item => ({
  type: "REDUCE_QUANTITY",
  payload: item
})
