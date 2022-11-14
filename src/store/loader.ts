import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoader: false,
  pos: {
    x: 0,
    y: 0,
  },
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: (state) => {
      state.isLoader = !state.isLoader
    },
    setLoaderPos: (state, action) => {
      state.pos = action.payload
    }
  },
})

export const { toggleLoader, setLoaderPos } = loaderSlice.actions

export default loaderSlice.reducer