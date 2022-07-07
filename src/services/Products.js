import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ProdsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products"
        }),
        getProductsCategories: builder.query({
            query: () => "products/categories"
        })
    })
})

export const { useGetProductsQuery } = ProdsApi;