import { Link } from "react-router-dom";
import "./components.css"
import buyBag from "../images/compras.png"

export default function NAvBar() {
    return (
        <nav className="nav-container">
            <ul className="routes-list">
                <li className="list-item">
                    <Link to="/" className="list-item-link">Home</Link>
                </li>
                <li className="list-item">
                    <Link to="/products" className="list-item-link">Products</Link>
                </li>
                <li className="list-item">
                    <Link to="/about" className="list-item-link">About</Link>
                </li>
            </ul>
            <div className="purchased-icons">
                <Link to="/products/purchased" className="list-item-link purchased-link">
                    <img src={buyBag} className="purchased-img" alt="" />
                </Link>
                <Link to="/cart" className="cart-button">
                    <img src="https://rededsgpoupebrasil.com.br//imagens/image/servicos//carrinho-icone.png" className="cart-img" alt="" />
                </Link>
            </div>
        </nav>
    )
}