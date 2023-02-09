import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: {},
        productToBuy: []
    },
    reducers: {
        setProductToBuy: (state, { payload }) => {
            return { ...state, productToBuy: [payload] }
        },
        removeProductToBuy: (state) => {
            return { ...state, productToBuy: {} }
        }
    },
    extraReducers: bulider => {
        bulider
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                return { ...state, products: payload }
            })
    },
})
export const { setProductToBuy, removeProductToBuy } = productsSlice.actions
export default productsSlice.reducer