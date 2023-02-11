import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/counterSlice'
import { shoesSlice } from './slices/shoes'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoes: shoesSlice.reducer
  },
})