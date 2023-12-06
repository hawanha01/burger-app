import { configureStore } from '@reduxjs/toolkit'
import RootReducer from '../reducer/rootReducer'

const store = configureStore({
  reducer: RootReducer
})

export default store
