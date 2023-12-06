import { combineReducers } from "redux"
import itemSlice from "../state/item/itemSlice"
import priceSlice from "../state/price/priceSlice"

const RootReducer = combineReducers({
  items: itemSlice.reducer,
  totalPrice: priceSlice.reducer
})

export default RootReducer