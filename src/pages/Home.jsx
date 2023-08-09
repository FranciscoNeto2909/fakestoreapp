import { useSelector } from "react-redux"
import ProductsCard from "../components/ProductsCard"
import Loader from "../components/Loader"
import { useEffect, useState } from "react"
export default function Home(params) {
    const products = useSelector(data => data.products.products)
    const [category] = useState("")
    const [filteredProducts, setFilteredProducts] = useState({})

    useEffect(() => {
        if (products.length > 0 && category !== "") {
            setFilteredProducts(products.filter(prod => prod.category === category))
        } else if (products.length > 0 && category === "") {
            setFilteredProducts(products)
        }
    }, [products, category])

    return (
        <div className="home">
            {filteredProducts.length === undefined &&
                <div className="loader-container">
                    <Loader />
                </div>}
            <div className="container-prod">
                {filteredProducts.length > 0 &&
                    filteredProducts.map((prod, i) => <ProductsCard
                        prod={prod} key={i} />)
                }
            </div>
        </div>
    )
}