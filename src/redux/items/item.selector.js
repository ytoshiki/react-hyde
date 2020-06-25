import { createSelector } from "reselect"

const selectItems = state => state.items

export const selectItem = createSelector([selectItems], items => items.items)

export const selectItemsToDisplay = createSelector([selectItems], items => items.itemsToDisplay)

export const selectFirstCategory = categoryUrlParam => createSelector([selectItem], item => item[categoryUrlParam])
