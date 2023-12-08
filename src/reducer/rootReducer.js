import { combineReducers } from 'redux'
import itemSlice from '../state/item/itemSlice'
import priceSlice from '../state/price/priceSlice'
import orderSlice from '../state/order/orderSlice'

const RootReducer = combineReducers({
  items: itemSlice.reducer,
  totalPrice: priceSlice.reducer,
  orders: orderSlice.reducer
})

export default RootReducer