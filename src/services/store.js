import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import { ProdsApi } from "./Products"

export const store = configureStore({
    reducer: {
        [ProdsApi.reducerPath]: ProdsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProdsApi.middleware)
})

setupListeners(store.dispatch)