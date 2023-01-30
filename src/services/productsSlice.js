import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: {}
    },
    reducers: {},
    extraReducers: bulider => {
        bulider
            .addCase(getProducts.fulfilled, (state, {payload}) => {
                return {...state, products:payload}
            })
    },
})

export default productsSlice.reducer