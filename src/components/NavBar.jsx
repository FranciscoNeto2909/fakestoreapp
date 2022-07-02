import { Link } from "react-router-dom";
import "./components.css"

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
        </nav>
    )
}