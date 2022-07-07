import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import { ProdsApi } from "./Products"
import cartReducer from "./slice"
export const store = configureStore({
    reducer: {
        [ProdsApi.reducerPath]: ProdsApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProdsApi.middleware)
})

setupListeners(store.dispatch)