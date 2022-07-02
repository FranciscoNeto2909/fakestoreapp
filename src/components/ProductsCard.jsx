import { useState } from "react"
import "./components.css"

import BuyCard from "./BuyCard"

export default function ProductsCard({ prod, i }) {
    const [selected, setSelected] = useState(false)
    function handleSelected() {
        setSelected(!selected)
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