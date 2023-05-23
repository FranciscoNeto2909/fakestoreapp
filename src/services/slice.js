import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "app",
    initialState: {
        cart: [],
        purchasedProducts:[],
        isMessage: false,
        isModalOpened: false,
        message: ""
    },
    reducers: {
        addItem(state, { payload }) {
            state.cart.push(payload)
        },
        removeItem(state, { payload }) {
            state.cart = state.cart.filter(prod => prod.id !== payload.id)
        },
        addPurchasedProduct(state, { payload }) {
            state.purchasedProducts.push(payload)
        },
        removePurchasedProduct(state, { payload }) {
            state.purchasedProducts = state.purchasedProducts.filter(prod => prod.id !== payload)
        },
        showMessage(state) {
            state.isMessage = true
        },
        hideMessage(state) {
            state.isMessage = false
        },
        setMessage(state, { payload }) {
            state.message = payload
        }
    }
})

export const { addItem, removeItem, showMessage, hideMessage, setMessage, addPurchasedProduct, removePurchasedProduct } = cartSlice.actions
export default cartSlice.reducer