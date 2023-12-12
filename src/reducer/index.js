import { combineReducers } from "redux";
import itemSlice from "../state/item";
import priceSlice from "../state/price";
import orderSlice from "../state/order";
import LoginSlice from "../state/user";

const RootReducer = combineReducers({
  items: itemSlice.reducer,
  totalPrice: priceSlice.reducer,
  orders: orderSlice.reducer,
  user: LoginSlice.reducer,
});

export default RootReducer;
