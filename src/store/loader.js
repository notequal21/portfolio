import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoader: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: (state) => {
      state.isLoader = !state.isLoader
    },
  },
})

export const { toggleLoader } = loaderSlice.actions

export default loaderSlice.reducer