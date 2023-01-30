import { useEffect, useState } from "react"
import ProductsCard from "../components/ProductsCard"
import Loader from "../components/Loader"
import "./pages.css"
import { useSelector } from "react-redux"

export default function Products() {
    const products = useSelector(data => data.products.products)
    const isModalOpened = useSelector(data => data.app.isModalOpened)
    const [category, setCategory] = useState("")
    const [filteredProducts, setFilteredProducts] = useState({})

    function handleFilterProducts() {
        if (products.length > 0 && category !== "") {
            setFilteredProducts(products.filter(prod => prod.category === category))
        } else if (products.length > 0 && category === "") {
            setFilteredProducts(products)
        }
    }

    useEffect(() => {
        handleFilterProducts()
    }, [products, category])

    return (
        <div className={`${isModalOpened && "hidden"} products`}>
            <div className="select-container">
                <select value={category} className="products-select" onChange={e => setCategory(e.target.value)}>
                    <option value="">todos</option>
                    <option value="electronics">Eletronic</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
            <div className="container-prod">
                {filteredProducts.length > 0 ?
                    filteredProducts.map((prod, i) => <ProductsCard
                        prod={prod} key={i} />) : <Loader />
                }
            </div>
        </div>
    )
}