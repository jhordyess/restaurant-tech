import { fetchProductImage, fetchProducts } from '@api/requests'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TProduct } from 'types'

type IUIState = {
  loadingProducts: boolean
}

const initialState: IUIState = {
  loadingProducts: false
}

const dataSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoadingProducts: (state, action) => {
      state.loadingProducts = action.payload
    }
  }
})

export const { setLoadingProducts } = dataSlice.actions
export default dataSlice.reducer
