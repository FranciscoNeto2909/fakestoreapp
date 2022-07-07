import React from "react";
import { cart } from "../cartObj";
import ProductsCard from "../components/ProductsCard";
export default function Cart() {
    return (
        <>
            <h1>cart</h1>
            <div className="cart">
                {cart.map((prod,i) => (
                    <ProductsCard prod={prod} key={i} />
                ))}
            </div>
        </>
    )
}