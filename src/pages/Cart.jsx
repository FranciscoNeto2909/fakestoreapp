import React from "react";
import { useSelector } from "react-redux/";
import ProductsCard from "../components/ProductsCard";
import "./pages.css"
export default function Cart() {
    const cart = useSelector(data => data.app.cart)
    return (
        <div className="cart-container">
            <h1>Carrinho</h1>
            <div className="cart">
                {cart.length > 0 ? cart.map((prod, i) => (
                    <ProductsCard prod={prod} key={i} />
                )) :
                <p>Seus produtos adicionados ao carrinho aparecerão aqui</p> 
                }
            </div>
        </div>
    )
}