import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
    name: 'counter',
    initialState: {
        products: [
            {
                id: "1",
                name: "shirt",
                price:2000
            },
            {
                id: "2",
                name: "pant",
                price:3000
            },
            {
                id: "3",
                name: "shoe",
                price:4000
                
            }
        ],

        product: {
            name: "",
            price:""
        }


    },
    reducers: {
        
        getdata: (state,action) => {
            state.product=state.products.find(el=>el.id==action.payload)   
           
        }
    },
})

// Action creators are generated for each case reducer function
export const { getdata } = productSlice.actions

export default productSlice.reducer