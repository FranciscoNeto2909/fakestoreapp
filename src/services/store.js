import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice"
import products from "./productsSlice"
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        products: products,
        app: appReducer,
        user: userSlice
    },
})