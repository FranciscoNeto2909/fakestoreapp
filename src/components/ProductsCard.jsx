import { useState } from "react"
import "./components.css"

import BuyCard from "./BuyCard"
import { cart, remToCart, setToCart } from "../cartObj"

export default function ProductsCard({ prod, i }) {
    const [selected, setSelected] = useState(false)
    const [cartImg, setCartImg] = useState("https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png")
    function handleSelected() {
        setSelected(!selected)
    }
    function hadleChangeCartImg() {
        const cartImg1 = "https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png"
        const cartImg2 = "https://static.thenounproject.com/png/700396-200.png"

        if (cartImg === cartImg1) {
            setCartImg(cartImg2)
        } else{
            setCartImg(cartImg1)
        }
    }
    function handleAddToCart() {
        hadleChangeCartImg()
        if (cart.includes(prod) ) {
            remToCart(prod)
        }else{
            setToCart(prod)
        }
        console.log(cart)
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
                    <button  className="card-cart" onClick={handleAddToCart}>
                        <img src={cartImg} alt="cart" className="card-cart-img"/>
                    </button>
                    <button className="card-btn" onClick={handleSelected}>Comprar</button>
                </div>
            </div>
            {
                selected &&
                <BuyCard prod={prod} handleSelected={handleSelected} />
            }
        </>
    )
}