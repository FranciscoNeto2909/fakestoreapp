import { useDispatch } from "react-redux"
import "./card.css"
import { useNavigate } from "react-router-dom"
import { setProdId } from "../../services/slice"

export default function Card({ prod, i, promotion }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleOpenProductPage() {
        dispatch(setProdId(prod.id))
        navigate("/product")
    }

    return (
        <>
            <div className="card" key={i} onClick={handleOpenProductPage}>
                <img src={prod?.image} alt="product" className="card-img" />
                <div className="card-texts">
                    <div className="card-info">
                        {promotion ?
                            <>
                                <div className="prod-price-prices" >
                                    <sup className="prod-price--realprice">R$:{prod?.price}</sup>
                                    <div className="prod-price">
                                        <span>
                                            R$:
                                            {Math.round((75 / 100) * prod?.price) - 1}.99
                                        </span>
                                        <span translate="no" className="prod-price--green">15% OFF</span>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="prod-price-priceAndInstallment">
                                <p className="prod-price">R$:
                                    {prod?.price}
                                </p>
                                <p className="prod-installment">em <span className="prod-price--green">10x R$ {(prod?.price / 10).toFixed(2)} sem juros</span></p>
                                <p className="prod-price-freight">Frete gratis</p>
                            </div>
                        }
                    </div>
                    <h5 className="card-title">{prod?.title}</h5>
                </div>
            </div>
        </>
    )
}