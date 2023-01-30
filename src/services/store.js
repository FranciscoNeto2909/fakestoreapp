import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import appReducer from "./slice"
import products from "./productsSlice"

export const store = configureStore({
    reducer: {
        products:products,
        app: appReducer
    },
})