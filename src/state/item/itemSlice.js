import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, name: 'lettuce', quantity: 0, price: 3 },
    { id: 2, name: 'bacon', quantity: 0, price: 5 },
    { id: 3, name: 'cheese', quantity: 0, price: 4 },
    { id: 4, name: 'meat', quantity: 0, price: 6 }
  ]
}

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    IncrementIngredient: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    },
    DecrementIngredient: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    },
    resetState: (state) => {
      state.items = [
        { id: 1, name: 'lettuce', quantity: 0, price: 3 },
        { id: 2, name: 'bacon', quantity: 0, price: 5 },
        { id: 3, name: 'cheese', quantity: 0, price: 4 },
        { id: 4, name: 'meat', quantity: 0, price: 6 }
      ]
    }
  }
})

export const { IncrementIngredient, DecrementIngredient, resetState } = itemSlice.actions
export default itemSlice
