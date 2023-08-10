import "./menu.css"
import { AiOutlineHome, AiOutlineUnorderedList, AiOutlineQuestionCircle } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci"
import { BiPurchaseTag } from "react-icons/bi"
export default function Menu() {
    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <AiOutlineHome size={16} />
                    Inicio
                </li>
                <li className="menu-item">
                    <CiDiscount1 size={16} />
                    Promoções
                </li>
                <li className="menu-item">
                    <AiOutlineUnorderedList size={16} />
                    Categorias</li>
                <li className="menu-item">
                    <BiPurchaseTag size={16} />
                    vender
                </li>
                <li className="menu-item">
                    <AiOutlineQuestionCircle size={16} />
                    Sobre
                </li>
            </ul>
        </div>
    )
}