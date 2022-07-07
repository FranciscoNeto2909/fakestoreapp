import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import slice from "./Slice";
const store = configureStore({
    reducer:{
        prod: slice
    }
})
