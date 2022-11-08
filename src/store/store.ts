import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader'
import projectsReducer from './projects'

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    projects: projectsReducer,
  },
})