import "./header.css"
import logo from "../../images/logo.png"
import { useEffect, useState } from "react"

import { AiOutlineShoppingCart } from "react-icons/ai"
import Menu from "../menu/Menu"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setFilter } from "../../services/productsSlice"

export default function NavBar() {
    const [dropdownOpened, setDropdownOpened] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSetFilter(filter) {
        dispatch(setFilter(filter))
    }

    function handleHideDropdown() {
        setDropdownOpened(false)
    }

    function handleShowDropdown() {
        setDropdownOpened(true)
    }
    

    useEffect(() => {
        window.addEventListener("click", e => {
            if (!e.target.className.includes("categorias")) {
                setDropdownOpened(false)
            }

            if (!e.target.className.includes("menu")) {
                setMenuOpened(false)
            }
        })
    }, [])


    return (
        <header className="header">
            <div className="header-logo" onClick={() => navigate('/')}>
                <img className="header-logo-img" src={logo} alt="logo" />
                <span className="header-logo-text">FakestoreApp</span>
            </div>
            <div className="header-search">
                <input className="header-search-input" type="text" placeholder="Buscar produtos, marcas e muito mais..." />
                <button className="header-search-btn">
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png" alt="" className="header-search-img" />
                </button>
            </div>
            <div className="header-menu" onClick={() => setMenuOpened(!menuOpened)}>
                <span className={`header-menu-item ${menuOpened && "header-item-line1"}`}></span>
                <span className={`header-menu-item ${menuOpened && "header-item-hiden"}`}></span>
                <span className={`header-menu-item ${menuOpened && "header-item-line2"}`}></span>
            </div>
            {
                menuOpened && <Menu setMenuOpened={setMenuOpened} />
            }
            <div className="header-anuncio">
                <p className="header-anuncio-text-first">Faça login e obtena um cupom de</p>
                <img className="header-anuncio-img" src="https://2.bp.blogspot.com/-i7KcLBYZ9Cw/VPOlbAu0L5I/AAAAAAAAEL8/e75x5MF8CLI/s1600/frete5.png" alt="" />
                <p className="header-anuncio-text">Na primeira compra</p>
            </div>
            <div className="header-cep">
                <img className="header-cep-img" src="https://cdn-icons-png.flaticon.com/512/106/106121.png" alt="" />
                <p className="header-cep-text">Informe seu <span className="header-cep-span">Cep</span></p>
            </div>
            <div className="header-categories">
                <ul className="header-categories-list">
                    <li onClick={handleShowDropdown} className="header-categories-item categorias">Categorias</li>
                    <li className="header-categories-item" onClick={() => navigate("/promoções")}>Promoções</li>
                    <li className="header-categories-item" onClick={() => navigate("/contacs")}>Contato</li>
                    <li className="header-categories-item" onClick={() => navigate("/sobre")}>Sobre</li>
                </ul>
                {dropdownOpened && <ul className="header-dropdown" onMouseLeave={handleHideDropdown}>
                    <li className="header-dropdown-item" onClick={() => handleSetFilter("")}>todos</li>
                    <li className="header-dropdown-item" onClick={() => handleSetFilter("electronics")}>Eletronic</li>
                    <li className="header-dropdown-item" onClick={() => handleSetFilter("jewelery")}>Jewelery</li>
                    <li className="header-dropdown-item" onClick={() => handleSetFilter("men's clothing")}>Men's clothing</li>
                    <li className="header-dropdown-item" onClick={() => handleSetFilter("women's clothing")}>Women's clothing</li>
                </ul>}
            </div>
            <nav className="header-nav">
                <button className="header-nav-item" onClick={() => navigate("/register")} >Crie sua conta</button>
                <button className="header-nav-item" onClick={() => navigate("/login")} >Entrar</button>
                <button className="header-nav-item" onClick={() => navigate("/minhas-compras")} >Compras</button>
                <button className="header-nav-cart" onClick={() => navigate("/carrinho")}>
                    <AiOutlineShoppingCart size={16} style={{ pointerEvents: "none" }} />
                </button>
            </nav>
        </header>
    )
}