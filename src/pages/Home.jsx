import { useSelector } from "react-redux"
import ProductsCard from "../components/productsCard/ProductsCard"
import Loader from "../components/Loader"
import { useEffect, useState } from "react"

export default function Home() {
    const { products, filter } = useSelector(data => data.products)
    const [filteredProducts, setFilteredProducts] = useState({})

    useEffect(() => {
        if (products.length > 0 && filter !== "") {
            setFilteredProducts(products.filter(prod => prod.category === filter))
        } else if (products.length > 0 && filter === "") {
            setFilteredProducts(products)
        }
    }, [products, filter])

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