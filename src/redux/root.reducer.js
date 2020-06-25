import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/user.reducer"
import directoryReducer from "./directory/directory.reducer"
import ItemReducer from "./items/item.reducer"
import cartReducer from "./cart/cart.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  items: ItemReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
