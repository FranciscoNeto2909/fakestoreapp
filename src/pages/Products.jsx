import { useState } from "react"
import {useGetProductsQuery} from "../services/Products"
import ProductsCard from "../components/ProductsCard"
import Loader from "../components/Loader"
import "./pages.css" 

export default function Products({products}) {
    const {data, error, isLoading, isSuccess, isError} = useGetProductsQuery()
    const [category, setCategory]= useState("")

    const filterProducts = data?.filter(prod => prod.category.includes(category))
    
    return(
        <>
        <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">todos</option>
        <option value="electronics">Eletronic</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        </select>
        <div className="container-prod">
            {isLoading && <Loader/>}
            {
                isSuccess && filterProducts.map((prod, i )=> <ProductsCard 
                prod={prod} key={i}/>)
            }
        </div>
        </>
    )
}