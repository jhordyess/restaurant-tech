import { fetchProductImage, fetchProducts } from '@api/requests'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoadingProducts } from './uiSlice'

type IMenuState = {
  products: TProduct[]
}

const initialState: IMenuState = {
  products: []
}

export const fetchProductsWithImage: any = createAsyncThunk(
  'data/fetchProductsWithImage',
  async (_, { dispatch }) => {
    dispatch(setLoadingProducts(true))

    const products = await fetchProducts()
    //Promise.all?🤔
    const newProducts = await Promise.all(
      products.map((product, index) => fetchProductImage(product, index + 30)) // Index?🤔
    )
    dispatch(setProducts(newProducts))
    dispatch(setLoadingProducts(false))
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setFavorite: (state, action) => {
      const currentProductIndex = state.products.findIndex(product => product.id === action.payload)

      if (currentProductIndex >= 0) {
        const isFavorite = state.products[currentProductIndex].favorite
        state.products[currentProductIndex].favorite = !isFavorite
      }
    }
  }
})

export const { setFavorite, setProducts } = dataSlice.actions
export default dataSlice.reducer
