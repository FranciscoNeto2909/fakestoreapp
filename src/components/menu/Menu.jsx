import { useEffect, useState } from "react"
import "./menu.css"
import { AiOutlineHome, AiOutlineUnorderedList, AiOutlineQuestionCircle, AiOutlineUserAdd, AiOutlineUser, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai"
import { CiDiscount1 } from "react-icons/ci"
import { BiPurchaseTag } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setFilteredCat } from "../../services/productsSlice"
import { logout } from "../../services/userSlice"

export default function Menu({ setMenuOpened }) {
    const [categoriesOpened, setCategoriesOpened] = useState(false)
    const filteredCat = useSelector(data => data.products.filteredCat)
    const user = useSelector(data => data.user.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSetFilter(filter) {
        dispatch(setFilteredCat(filter))
        setMenuOpened(false)
    }
    function handleDropdown(e) {
        if (!e.target.className.includes("item-categorie")) {
            setCategoriesOpened(false)
        }
    }

    function handleNavigate(route) {
        navigate(route)
        setMenuOpened(false)
    }

    function handleLogout() {
        dispatch(logout())
        navigate("/")
        setMenuOpened(false)
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
                        <li className={`menu-item-categorie ${filteredCat === "" && "categorie-selected"}`} onClick={() => handleSetFilter("")}>Todos</li>

                        <li className={`menu-item-categorie ${filteredCat === "electronics" && "categorie-selected"}`} onClick={() => handleSetFilter("electronics")}>Eletronics</li>

                        <li className={`menu-item-categorie ${filteredCat === "jewelery" && "categorie-selected"}`} onClick={() => handleSetFilter("jewelery")}>Jewelery</li
                        >
                        <li className={`menu-item-categorie ${filteredCat === "men's clothing" && "categorie-selected"}`} onClick={() => handleSetFilter("men's clothing")}>Men's clothing</li>

                        <li className={`menu-item-categorie ${filteredCat === "women's clothing" && "categorie-selected"}`} onClick={() => handleSetFilter("women's clothing")}>Women's clothing</li>
                    </>
                }
                <li className="menu-item" onClick={() => handleNavigate("/vendas")}>
                    <BiPurchaseTag size={20} />
                    vender
                </li>
                {user.isLogged ?
                    <li className="menu-item" onClick={() => handleNavigate("/profile")}>
                        <AiOutlineUser size={20} />
                        Perfil
                    </li> :
                    <>
                        <li className="menu-item" onClick={() => handleNavigate("/register")}>
                            <AiOutlineUserAdd size={20} />
                            Criar Conta
                        </li>
                        <li className="menu-item" onClick={() => handleNavigate("/login")}>
                            <AiOutlineLogin size={20} />
                            Entrar
                        </li>
                    </>
                }
                <li className="menu-item" onClick={() => handleNavigate("/sobre")}>
                    <AiOutlineQuestionCircle size={20} />
                    Sobre
                </li>
                {
                    user.isLogged && <li className="menu-item" onClick={handleLogout}>
                        <AiOutlineLogout size={20} />
                        Sair
                    </li>
                }
            </ul>
        </div>
    )
}