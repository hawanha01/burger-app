import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 3
}

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updateTotalPrice: (state,action) => {
      state.totalPrice = action.payload.items.reduce((sum, item) => (sum + item.quantity * item.price), 3)
    }
  }
})

export const { updateTotalPrice } = priceSlice.actions
export default priceSlice
