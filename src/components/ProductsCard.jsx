// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import "./components.css"
// import { addItem, removeItem, showMessage, hideMessage, setMessage } from "../services/slice"
// import { setProductToBuy } from "../services/productsSlice"

export default function ProductsCard({ prod, i }) {
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
                <img src={prod.image} alt="product" className="card-img" />
                <h5 className="card-title">{prod.title}</h5>
                <div className="card-info">
                    <p className="prod-price">R$:
                        <span className="prod-price--green">{prod.price}</span>
                    </p>
                </div>
            </div>
        </>
    )
}