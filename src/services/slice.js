import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "app",
    initialState:{
        cart:[],
        isMessage:false,
        message : ""
    },
    reducers: {
        addItem(state, {payload}){
            state.cart.push(payload)
        },
        removeItem(state,{payload}){
            state.cart = state.cart.filter(prod => prod.id !== payload.id)
        },
        showMessage(state){
            state.isMessage = true
        },
        hideMessage(state){
            state.isMessage = false
        },
        setMessage(state, {payload}){
            state.message = payload
        }
    }
})

export const {addItem, removeItem, showMessage, hideMessage, setMessage} = cartSlice.actions
export default cartSlice.reducer