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
        productToBuy: [],
        filteredCat: "",
        searchedProd: ""
    },
    reducers: {
        setProductToBuy: (state, { payload }) => {
            return { ...state, productToBuy: [payload] }
        },
        removeProductToBuy: (state) => {
            return { ...state, productToBuy: {} }
        },
        setFilteredCat: (state, { payload }) => {
            return { ...state, filteredCat: payload }
        },
        setSearchedProd: (state, { payload }) => {
            return { ...state, searchedProd: payload }
        }
    },
    extraReducers: bulider => {
        bulider
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                return { ...state, products: payload }
            })
    },
})
export const { setProductToBuy, removeProductToBuy, setFilteredCat, setSearchedProd } = productsSlice.actions
export default productsSlice.reducer