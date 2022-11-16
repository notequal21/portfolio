import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cursorUpdate: false,
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
    },
    setCursorUpdate: (state) => {
      state.cursorUpdate = !state.cursorUpdate
    },
  },
})

export const { toggleLoader, setLoaderPos, setCursorUpdate } = loaderSlice.actions

export default loaderSlice.reducer