import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"
import { ProdsApi } from "./Products"
import appReducer from "./slice"
export const store = configureStore({
    reducer: {
        [ProdsApi.reducerPath]: ProdsApi.reducer,
        app: appReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProdsApi.middleware)
})

setupListeners(store.dispatch)