import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice"
import products from "./productsSlice"

export const store = configureStore({
    reducer: {
        products:products,
        app: appReducer
    },
})