import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints:(builder)=>({
        getProductsByCategory:builder.query({
            query: (category) => `/products/category/${category}`,
            transformResponse:(response)=>{
                const data = response['products']
                return data
            }
        }),
        getCategories: builder.query({
            query: () => "/products/categories"
        }),
        getProduct:builder.query({
            query:(id) => `/products/${id}`
        })
    })
})

export const {useGetCategoriesQuery,useGetProductsByCategoryQuery,useGetProductQuery} = shopApi


