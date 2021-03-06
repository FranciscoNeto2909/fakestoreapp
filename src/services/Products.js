import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ProdsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products"
        })
    })
})

export const { useGetProductsQuery } = ProdsApi;