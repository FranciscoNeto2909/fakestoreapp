import "./components.css"

export default function BuyCard({ prod, handleSelected }) {
    function handleBuy() {
        document.querySelector(".boughtAlert-container").style.display = "block"
        handleSelected()
        setTimeout(() => {
            document.querySelector(".boughtAlert-container").style.display = "none"
        }, 3000);
    }
    return (
        <div className="buyCard-container">
            <div className="buyCard">
                <button className="card-btn  card-btn--close" onClick={handleSelected}>X</button>
                <img src={prod.image} alt="product" className="buyCard-img" />
                <h5 className="buyCard-title">{prod.title}</h5>
                <p className="buyCard-prod-desc">{prod.description}</p>
                <div className="card-info">
                    <p className="buyCard-prod-price">R$:
                        <span className="prod-price--green">{prod.price}</span>
                        <span className="prod-price prod-price--off">15% off</span>
                    </p>
                    <button className="card-btn" onClick={handleBuy}>Comprar</button>
                </div>
            </div>
        </div>
    )
}