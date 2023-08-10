import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./components.css"
import { addItem, removeItem, showMessage, hideMessage, setMessage } from "../services/slice"
import { setProductToBuy } from "../services/productsSlice"

export default function ProductsCard({ prod, i }) {
    const dispatch = useDispatch()
    const cart = useSelector(data => data.app.cart)

    const [cartImg, setCartImg] = useState("https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png")

    function handleSelect() {
        dispatch(setProductToBuy(prod))
    }

    function handleShowMessage(text) {
        dispatch(showMessage())
        dispatch(setMessage(text))
        setTimeout(() => {
            dispatch(hideMessage())
        }, 3000);
    }
    function hadleChangeCartImg() {
        const cartImg1 = "https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png"
        const cartImg2 = "https://static.thenounproject.com/png/700396-200.png"

        if (cartImg === cartImg1) {
            setCartImg(cartImg2)
        } else {
            setCartImg(cartImg1)
        }
    }
    
    function handleAddToCart() {
        hadleChangeCartImg()
        if (!cart.includes(prod)) {
            dispatch(addItem(prod))
            handleShowMessage("Produto adicionado ao carrinho")
        } else {
            dispatch(removeItem(prod))
            handleShowMessage("Produto removido do carrinho")
        }
    }

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