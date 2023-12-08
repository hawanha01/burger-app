import { createSlice } from "@reduxjs/toolkit"

const initialState={
  orders: [],
  lastOrderId: 0
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers:{
    updateOrders: (state,action) => {
      const order = {items: action.payload, id: state.lastOrderId + 1}
      state.orders.push(order)
      state.lastOrderId += 1
    }
  }
})

export default orderSlice