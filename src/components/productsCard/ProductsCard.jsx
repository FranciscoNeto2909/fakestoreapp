// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addItem, removeItem, showMessage, hideMessage, setMessage } from "../services/slice"
// import { setProductToBuy } from "../services/productsSlice"
import "./productsCard.css"

export default function ProductsCard({ prod, i, promotion }) {
    // const dispatch = useDispatch()
    // const cart = useSelector(data => data.app.cart)

    // function handleSelect() {
    //     dispatch(setProductToBuy(prod))
    // }

    // function handleShowMessage(text) {
    //     dispatch(showMessage())
    //     dispatch(setMessage(text))
    //     setTimeout(() => {
    //         dispatch(hideMessage())
    //     }, 3000);
    // }

    // function handleAddToCart() {
    //     hadleChangeCartImg()
    //     if (!cart.includes(prod)) {
    //         dispatch(addItem(prod))
    //         handleShowMessage("Produto adicionado ao carrinho")
    //     } else {
    //         dispatch(removeItem(prod))
    //         handleShowMessage("Produto removido do carrinho")
    //     }
    // }


    return (
        <>
            <div className="card" key={i}>
                <img src={prod?.image} alt="product" className="card-img" />
                <div className="card-texts">
                    <div className="card-info">
                        {promotion ?
                            <>
                                <div className="prod-price-prices" >
                                    <sup className="prod-price--realprice">R$:{prod?.price}</sup>
                                    <div className="prod-price">
                                        <span>
                                            R$:
                                            {Math.round((75 / 100) * prod?.price) - 1}.99
                                        </span>
                                        <span translate="no" className="prod-price--green">15% OFF</span>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="prod-price-priceAndInstallment">
                                <p className="prod-price">R$:
                                    {prod?.price}
                                </p>
                                <p className="prod-installment">em <span className="prod-price--green">10x R$ {(prod?.price/10).toFixed(2)} sem juros</span></p>
                                <p className="prod-price-freight">Frete gratis</p>
                            </div>
                        }
                    </div>
                    <h5 className="card-title">{prod?.title}</h5>
                </div>
            </div>
        </>
    )
}