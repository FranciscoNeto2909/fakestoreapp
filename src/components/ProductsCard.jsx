import "./components.css"

export default function ProductsCard({prod}) {
    return(
        <div className="card">
            <h5 className="card-title">{prod.title}</h5>
            <img src={prod.image} alt="product" className="card-img"/>
            <div className="card-info">
                <p className="prod-price">R$:
                    <span className="prod-price--green">{prod.price}</span>
                </p>
                <button className="card-info-btn">Comprar</button>
            </div>
        </div>
    )
}