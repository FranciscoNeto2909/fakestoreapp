import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ProductsCard from "../../components/card/Card"
import Loader from "../../components/Loader"
import "./home.css"

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
                } else {
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
            <div className="home-anuncio">
                <div className="home-anuncio-texts">
                    <p className="home-anuncio-text">Monitores AMD, full hd 144hz e muito mais!<span className="home-anuncio-textStrong">Monte hoje seu setup gamer</span></p>
                    <div className="home-anuncio-installment">
                        <span className="home-installment-one">ATÉ</span>
                        <span className="home-installment-middle">12X</span>
                        <span className="home-installment-twho">SEM JUROS</span>
                    </div>
                    <div className="home-anuncio-freight">
                        <span className="home-freight-one">FRETE GRATIS</span> <span className="home-freight-twho">A PARTIR DE R$ 99</span>
                    </div>
                </div>
                <img className="home-anuncio-img" src="https://www.gamemax-br.com/img/produtos/1542873654(4).png" alt="" />
            </div>
            <div className="home-payments">
                <div className="home-payment">
                    <p className="home-payment-title">Pagamento rápido e seguro</p>
                    <p className="home-payment-desc">SharkBank</p>
                </div>
                <div className="home-payment">
                    <p className="home-payment-title">Até 12 vezes sem juros</p>
                    <p className="home-payment-desc">Ver mais...</p>
                </div><div className="home-payment">
                    <p className="home-payment-title">Desconto no pix</p>
                    <p className="home-payment-desc">Ver mais...</p>
                </div><div className="home-payment">
                    <p className="home-payment-title">Mais formas de pagamento</p>
                    <p className="home-payment-desc">Ver mais</p>
                </div>
            </div>
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