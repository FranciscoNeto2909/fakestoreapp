import { useEffect, useState } from "react"
import "./menu.css"
import { AiOutlineHome, AiOutlineUnorderedList, AiOutlineQuestionCircle } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci"
import { BiPurchaseTag } from "react-icons/bi"

export default function Menu() {
    const [categoriesOpened, setCategoriesOpened] = useState(false)

    useEffect(() => {
        window.addEventListener("click", e => {

            if (!e.target.className.includes("item-categorie")) {
                setCategoriesOpened(false)
            }
        })
    }, [])
    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <AiOutlineHome size={20} />
                    Inicio
                </li>
                <li className="menu-item">
                    <CiDiscount1 size={20} />
                    Promoções
                </li>
                <li className="menu-item menu-item-categories" onClick={() => setCategoriesOpened(!categoriesOpened)}>
                    <AiOutlineUnorderedList size={20} />
                    Categorias
                </li>
                {categoriesOpened &&
                    <>
                        <li className="menu-item-categorie">Todos</li>
                        <li className="menu-item-categorie">Eletronic</li>
                        <li className="menu-item-categorie">Jewelery</li>
                        <li className="menu-item-categorie">Men's clothing</li>
                        <li className="menu-item-categorie">Women's clothing</li>
                    </>
                }
                <li className="menu-item">
                    <BiPurchaseTag size={20} />
                    vender
                </li>
                <li className="menu-item">
                    <AiOutlineQuestionCircle size={20} />
                    Sobre
                </li>
            </ul>
        </div>
    )
}