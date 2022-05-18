import { Link } from "react-router-dom";

export default function NAvBar() {
    return(
        <nav className="nav-container">
            <ul className="routes-list">
                <li className="route-list-item"><Link to="/">Home</Link></li>
                <li className="route-list-item"><Link to="/products">Products</Link></li>
                <li className="route-list-item"><Link to="/sale">Sale</Link></li>
                <li className="route-list-item"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}