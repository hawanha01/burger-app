import { createSlice } from "@reduxjs/toolkit"

const initialState={
  orders: [],
  lastOrderId: 0,
  user_id: null
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers:{
    updateOrders: (state,action) => {
      const {items, user} = action.payload
      const order = {items: items, id: state.lastOrderId + 1, user_id: user.id}
      state.orders.push(order)
      state.lastOrderId += 1
    }
  }
})

export default orderSlice