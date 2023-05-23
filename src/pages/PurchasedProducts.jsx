import { useDispatch, useSelector } from "react-redux"
import { hideMessage, removePurchasedProduct, setMessage, showMessage } from "../services/slice";

export default function PurchasedProducts() {

    const prods = useSelector(data => data.app.purchasedProducts)
    const dispatch = useDispatch();

    function handleShowMessage(id, text) {
        dispatch(showMessage())
        dispatch(setMessage(text))
        setTimeout(() => {
            dispatch(hideMessage())
            dispatch(removePurchasedProduct(id))
        }, 3000);
    }

    function handleCancelPurchase(id) {
        handleShowMessage(id, "Compra cancelada com sucesso!")
    }

    function handlePurchasedReceived(id) {
        handleShowMessage(id, "Obrigado por comprar em nosso site!")
    }

    return (
        <>
            <h1>Comprados</h1>
            <div className="purchased-container">
                {prods.length >= 1 ?
                    prods.map((prod, i) => (
                        <div className="card purchased" key={i}>
                            <img src={prod.image} alt="product" className="card-img" />
                            <h5 className="card-title purchased-title" style={{ textAlign: "start" }}>{prod.title}</h5>
                            <div className="card-prices">
                                <span className="card-prices-text">Quantidade: {prod.amount}</span>
                                <span className="card-prices-text">Metodo de pagamento: {prod.payMethod}</span>
                                <span className="card-prices-text">Preço final: {prod.finalPrice}</span>
                            </div>
                            <div className="card-info">
                                <button className="purchased-cancel-btn" onClick={() => handleCancelPurchase(prod.id)}>
                                    Cancelar
                                </button>
                                <button className="card-btn" onClick={() => handlePurchasedReceived(prod.id)}>
                                    Recebido
                                </button>
                            </div>
                        </div>
                    ))
                    :
                    <div className="purchased-notice">
                        <p>Suas compras apareçerão aqui</p>
                    </div>
                }
            </div>
        </>
    )
}