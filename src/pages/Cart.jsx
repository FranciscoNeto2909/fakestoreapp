import React from "react";
import { useSelector } from "react-redux/";
import ProductsCard from "../components/ProductsCard";
import "./pages.css"
export default function Cart() {
    const cart = useSelector(data => data.cart.cart)
    return (
        <>
            <h1>cart</h1>
            <div className="cart">
                {cart.length > 0 && cart.map((prod,i) => (
                    <ProductsCard prod={prod} key={i} />
                ))}
            </div>
        </>
    )
}