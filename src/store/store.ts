import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader'
import projectsReducer from './projects'
import reviewsReducer from './reviews'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    projects: projectsReducer,
    reviews: reviewsReducer,
  },
})