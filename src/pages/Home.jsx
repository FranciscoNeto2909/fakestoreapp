import { useSelector } from "react-redux"
import ProductsCard from "../components/productsCard/ProductsCard"
import Loader from "../components/Loader"
import { useEffect, useState } from "react"

export default function Home() {
    const { products, filteredCat, searchedProd } = useSelector(data => data.products)
    const [filteredProducts, setFilteredProducts] = useState({})

    useEffect(() => {
        if (products.length > 0 && filteredCat !== "") {
            setFilteredProducts(products.filter(prod => prod.category === filteredCat))
        } else if (products.length > 0 && filteredCat === "") {
            setFilteredProducts(products)
        }
    }, [products, filteredCat])


    useEffect(() => {
        if (searchedProd !== "") {
            setFilteredProducts(filteredProducts.filter(prod => {
                const lowercaseProd = prod.title.toLowerCase()
                if (lowercaseProd.includes(searchedProd)) {
                    return prod
                }else{
                    return false
                }
            }))
        } else if (searchedProd === "") {
            setFilteredProducts(products)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchedProd])

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