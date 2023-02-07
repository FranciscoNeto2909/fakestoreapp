import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ProductsCard from "../components/ProductsCard"

export default function Home(params) {
    const [prods, setProds] = useState({})
    const products = useSelector(data => data.products.products)

    useEffect(() => {
        if (products.length > 0) {
            setProds(products.slice(0, 4))
        }
    }, [products])

    return (
        <div className="home">
            <h2>Seja bem-vindo a nossa loja</h2>
            <p className="home-resume">Aqui você encontrará os melhores produtos <br /> com os melhores preços para satisfazer todos os gostos.</p>
            <h3 className="home-emphasis">Confira alguns de nossos destaque</h3>
            <div className="carroussel" >
                {prods.length > 0 &&
                    prods.map((prod, i) => (
                        <ProductsCard key={i} prod={prod} />
                    ))
                }
            </div>
        </div>
    )
}