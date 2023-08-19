import { useDispatch, useSelector } from "react-redux"
import Card from "../../components/card/Card"
import RatingStars from "../../components/ratingStars/RatingStars"
import "./product.css"
import { useEffect, useState } from "react"
import { setFilteredCat } from "../../services/productsSlice"

export default function Product() {
    const [prod, setProd] = useState({})
    const [sameProducts, setSameProducts] = useState({})
    const products = useSelector(data => data.products.products)
    const prodId = useSelector(data => data.app.prodId)
    const dispatch = useDispatch()

    const defaultImage = "https://mlohrktvfr9b.i.optimole.com/cb:tVDx~16b5e/w:500/h:500/q:mauto/https://www.nerdstickers.com.br/wp-content/uploads/2020/11/adesivo-loading-nerdstickers-preto-1.png"

    function handleSetCategoryBtn() {
        dispatch(setFilteredCat(prod.category))
    }

    useEffect(() => {
        if (products.length > 0) {
            setProd(products?.find(product => Number(product.id) === Number(prodId)))
            setSameProducts(products?.filter(product => product.category === prod?.category))
        }
    }, [products, prod, prodId])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [prodId])

    return (
        <div className="product" id="product-page">
            <div className="product-header">
                <div className="product-header-items">
                    <a className="product-header-item" href="/">Voltar</a>
                    <a className="product-header-item" onClick={handleSetCategoryBtn} href="/">{prod?.category}</a>
                </div>
                <div className="product-header-items">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a className="product-header-item" href="#">Compartilhar</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a className="product-header-item" href="#">vender</a>
                </div>
            </div>
            <div className="product-main">
                <div className="product-left">
                    <img src={prod?.image ? prod.image : defaultImage} alt="" className="product-img" />
                </div>
                <div className="product-middle">
                    <h1 className="product-title">{prod?.title ? prod.title : "..."}</h1>
                    <div className="product-rating">
                        <RatingStars rating={prod?.rating?.rate} />
                        <span className="product-rating-count">{prod.rating ? `(${prod?.rating?.count})` : "..."}</span>
                    </div>
                    <div className="product-values">
                        <p className="product-discount">R$: {prod?.price ? prod.price : "00.00"}</p>
                        <p className="product-price">
                            R$ {prod.price ? `${Math.round((75 / 100) * prod?.price) - 1}.99` : "00.00"}
                            <span className="product-price-off" translate="no">15% 0FF</span>
                        </p>
                        <p className="product-installment">
                            em <span className="product-installment-value">
                                10x R$ {((Math.round((75 / 100) * prod?.price) - 1) / 10).toFixed(2)} sem juros
                            </span>
                        </p>
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a href="#" className="product-paymentMethods">Ver os meios de pagamento</a>
                    </div>
                    <div className="product-info">
                        <h4 className="product-info-title">Informações deste produto</h4>
                        <p className="product-info-desc">{prod?.description ? prod.description : "..."}</p>
                    </div>
                </div>
                <div className="product-right">
                    <p className="product-freight">Frete grátis</p>
                    <div className="product-buyInfo">
                        <p className="product-text">Quantidade:
                            <span className="product-amount"> 1 unidade</span>
                            <span className="product-available"> &#40;10 disponíveis&#41;</span>
                        </p>
                        <p className="product-buyAmount">Você pode comprar apenas 1 unidade</p>
                    </div>
                    <div className="product-buy">
                        <button className="product-buy-btnBuy">
                            Comprar agora
                        </button>
                        <button className="product-buy-btnAddCart">
                            Adicionar ao carrinho
                        </button>
                    </div>
                    <div className="product-bought">
                        <p className="product-bought-devolution">Devolução gratis, você tem 7 dias apartir da data de recebimento.</p>
                        <p className="product-bought-garantee">Compra garantida, receba seu produto ou devolvemos seu dinheiro.</p>
                        <p className="product-bought-garanteeTime">12 meses de garantia.</p>
                    </div>
                </div>
            </div>
            <div className="product-payment">
                <div className="product-payment-info">
                    <h4 className="product-payment-title">Metodos de pagamento</h4>
                    <button className="product-payment-btn">Pague em até 10x sem juros</button>
                    <p className="product-payment-maxInstallment">Até 8x sem cartão
                    </p>
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="product-otherPayments" href="#">Outros metodos de pagamento</a>
                </div>
                <ul className="product-payment-methods">
                    <li className="product-payment-item">Cartão de credito</li>
                    <li className="product-payment-item">Cartão de debito</li>
                    <li className="product-payment-item">Boleto</li>
                    <li className="product-payment-item">Pix</li>
                </ul>
            </div>
            <section className="product-same">
                <h3 className="product-same-title">Outros usuários também compraram</h3>
                <div className="product-same-cards">
                    {sameProducts.length > 0 &&
                        sameProducts.map((product, i) => (
                            <Card prod={product} key={i} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}