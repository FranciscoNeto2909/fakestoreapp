import "./components.css"
import { useDispatch, useSelector } from "react-redux"
import { showMessage, hideMessage, setMessage, addPurchasedProduct } from "../services/slice"
import { removeProductToBuy } from "../services/productsSlice"
import { useEffect, useState } from "react"
import { addItem, removeItem } from "../services/slice"


export default function BuyCard() {
    const [prod] = useSelector(data => data.products.productToBuy)
    const cart = useSelector(data => data.app.cart)
    const [amount, setAmount] = useState(1)
    const [payMethod, setPayMethod] = useState("");
    const [finalPrice, setFinalPrice] = useState(prod.price)
    const dispatch = useDispatch()

    const [cartImg, setCartImg] = useState("https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png")

    function handleShowMessage(text) {
        dispatch(showMessage())
        dispatch(setMessage(text))
        setTimeout(() => {
            dispatch(hideMessage())
            dispatch(removeProductToBuy())
        }, 3000);
    }

    function handleBuy() {
        if (payMethod === "") {
            dispatch(showMessage())
            dispatch(setMessage("Escolha um metodo de pagamento válido!"))
            setTimeout(() => {
                dispatch(hideMessage())
            }, 3000);
        } else {
            handleShowMessage("Produto comprado com sucesso!")
            dispatch(addPurchasedProduct({
                ...prod,
                finalPrice,
                amount,
                payMethod
            }))
        }
    }

    function handleCancelBuy() {
        dispatch(removeProductToBuy())
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

    function handleIncrement() {
        setAmount(amount + 1)

    }

    function handleDecrement() {
        amount > 1 && setAmount(amount - 1)
    }

    useEffect(() => {
        setFinalPrice((prod.price * amount) - ((prod.price * amount * 10) / 100))
    }, [amount, prod.price])

    return (
        <div className="buyCard-container">
            <div className="buyCard">
                <button className="card-btn--close" onClick={handleCancelBuy}>
                    <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-red-icon.png" className="card-btn-closeimg" alt="" />
                </button>
                <img src={prod.image} alt="product" className="buyCard-img" />
                <h5 className="buyCard-title">{prod.title}</h5>
                <p className="buyCard-prod-desc">{prod.description}</p>
                <div className="card-info">
                    <p className="buyCard-prod-price">R$:
                        <span className="prod-price--green">{prod.price}</span>
                        <span className="prod-price prod-price--off">10% off</span>
                    </p>
                </div>
                <div className="buyCard-buyOptions">
                    <div className="buyCard-amount">
                        <span>Quantidade</span>
                        <div>
                            <button className="buyCard-amount-btn" onClick={handleDecrement}>-</button>
                            <span>{amount}</span>
                            <button className="buyCard-amount-btn" onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="buyCard-cupom">
                        <label htmlFor="">Cupom de desconto</label>
                        <input type="text" className="buyCard-cupom-input" placeholder="client-mybnb" />
                    </div>
                    <div className="buyCard-paymethod">
                        <p>Selecione o metodo de pagamento</p>
                        <div className="buyCard-paymethod-options">

                            {payMethod === "" && <img src="https://gifs.eco.br/wp-content/uploads/2023/03/imagens-de-formas-de-pagamento-png-0.png" className="buyCard-paymethod-img" alt="" />}

                            {payMethod === "pix" && <img src="https://devtools.com.br/img/pix/logo-pix-png-icone-520x520.png" className="buyCard-paymethod-img" alt="" />}

                            {payMethod === "cartao" && <img src="https://static.vecteezy.com/system/resources/previews/010/998/135/non_2x/cute-3d-credit-card-illustration-design-free-png.png" className="buyCard-paymethod-img" alt="" />}

                            {payMethod === "boleto" && <img src="https://seeklogo.com/images/B/boleto-codigo-barra-preto-black-bar-code-ticket-logo-AB7B0F1776-seeklogo.com.png" className="buyCard-paymethod-img" alt="" />}



                            <select name="" id="" value={payMethod} onChange={e => setPayMethod(e.target.value)}>
                                <option value="">Selecionar</option>
                                <option value="pix">Pix</option>
                                <option value="cartao">Cartão</option>
                                <option value="boleto">Boleto</option>
                            </select>
                        </div>
                    </div>
                    <div className="buyCard-finalPrice">
                        <p>
                            Valor total R$:
                            <span className="buyCard-finalPrice-price">{finalPrice.toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                <div className="buyCard-buttons">
                    <button className="card-cart" onClick={handleAddToCart}>
                        <img src={cartImg} alt="cart" className="card-cart-img" />
                    </button>
                    <button className="card-btn buyCard-btn-buy" onClick={handleBuy}>Comprar</button>
                </div>
            </div>
        </div>
    )
}