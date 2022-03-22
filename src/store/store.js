import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader.js'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
})