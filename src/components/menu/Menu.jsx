import { useEffect, useState } from "react"
import "./menu.css"
import { AiOutlineHome, AiOutlineUnorderedList, AiOutlineQuestionCircle } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci"
import { BiPurchaseTag } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setFilter } from "../../services/productsSlice"

export default function Menu({ setMenuOpened }) {
    const [categoriesOpened, setCategoriesOpened] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSetFilter(filter) {
        dispatch(setFilter(filter))
        setMenuOpened(false)
    }
    function handleDropdown(e) {
        if (!e.target.className.includes("item-categorie")) {
            setCategoriesOpened(false)
        }
    }

    function handleNavigate(route) {
        setMenuOpened(false)
        navigate(route)
    }

    useEffect(() => {
        window.addEventListener("click", handleDropdown)

        return () => {
            window.removeEventListener("click", handleDropdown);
        };
    }, [])

    return (
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item" onClick={() => handleNavigate("/")}>
                    <AiOutlineHome size={20} />
                    Inicio
                </li>
                <li className="menu-item" onClick={() => handleNavigate("/promoções")}>
                    <CiDiscount1 size={20} />
                    Promoções
                </li>
                <li className="menu-item menu-item-categories" onClick={() => setCategoriesOpened(!categoriesOpened)}>
                    <AiOutlineUnorderedList size={20} />
                    Categorias
                </li>
                {categoriesOpened &&
                    <>
                        <li className="menu-item-categorie" onClick={() => handleSetFilter("")}>Todos</li>
                        <li className="menu-item-categorie" onClick={() => handleSetFilter("electronics")}>Eletronics</li>
                        <li className="menu-item-categorie" onClick={() => handleSetFilter("jewelery")}>Jewelery</li>
                        <li className="menu-item-categorie" onClick={() => handleSetFilter("men's clothing")}>Men's clothing</li>
                        <li className="menu-item-categorie" onClick={() => handleSetFilter("women's clothing")}>Women's clothing</li>
                    </>
                }
                <li className="menu-item" onClick={() => handleNavigate("/vendas")}>
                    <BiPurchaseTag size={20} />
                    vender
                </li>
                <li className="menu-item" onClick={() => handleNavigate("/sobre")}>
                    <AiOutlineQuestionCircle size={20} />
                    Sobre
                </li>
            </ul>
        </div>
    )
}