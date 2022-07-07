import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState:{
        cart:[]
    },
    reducers: {
        addItem(state, {payload}){
            state.cart.push(payload)
        },
        removeItem(state,{payload}){
            state.cart = state.cart.filter(prod => prod.id !== payload.id)
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer