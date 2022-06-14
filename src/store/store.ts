import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
})