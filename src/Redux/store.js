import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Features/Products/ProductSlice'
const store = configureStore({
    reducer: {
        product:ProductSlice
    },
})

export default store