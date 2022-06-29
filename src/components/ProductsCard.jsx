import "./components.css"

export default function ProductsCard({prod, i}) {
    return(
        <div className="card" key={i}>
            <img src={prod.image} alt="product" className="card-img"/>
            <h5 className="card-title">{prod.title}</h5>
            <div className="card-info">
                <p className="prod-price">R$:
                    <span className="prod-price--green">{prod.price}</span>
                </p>
                <button className="card-btn">Comprar</button>
            </div>
        </div>
    )
}