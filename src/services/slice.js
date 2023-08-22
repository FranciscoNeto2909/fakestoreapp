import { createSlice } from "@reduxjs/toolkit";
const initialProdId = localStorage.getItem("prodId")

const cartSlice = createSlice({
    name: "app",
    initialState: {
        cart: [],
        purchasedProducts: [],
        isMessage: false,
        isModalOpened: false,
        message: "",
        cep: {
            cep: "",
            location: ""
        },
        prodId: initialProdId
    },
    reducers: {
        addItem(state, { payload }) {
            state.cart.push(payload);
        },
        removeItem(state, { payload }) {
            state.cart = state.cart.filter(prod => prod.id !== payload.id);
        },
        addPurchasedProduct(state, { payload }) {
            state.purchasedProducts.push(payload);
        },
        removePurchasedProduct(state, { payload }) {
            state.purchasedProducts = state.purchasedProducts.filter(prod => prod.id !== payload);
        },
        showMessage(state) {
            state.isMessage = true;
        },
        hideMessage(state) {
            state.isMessage = false;
        },
        setMessage(state, { payload }) {
            state.message = payload;
        },
        setCep(state, { payload }) {
            state.cep = payload;
        },
        setProdId(state, { payload }) {
            localStorage.setItem("prodId", payload);
            state.prodId = payload;
        },
        cleanProdId(state) {
            state.prodId = "";
        }
    }
})

export const { addItem, removeItem, showMessage, hideMessage, setMessage, addPurchasedProduct, removePurchasedProduct, setCep, setProdId, cleanProdId } = cartSlice.actions

export default cartSlice.reducer