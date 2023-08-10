import "./header.css"
import logo from "../../images/logo.png"
import { useEffect, useState } from "react"

import { AiOutlineShoppingCart } from "react-icons/ai"
import Menu from "../menu/Menu"

export default function NavBar() {
    const [dropdownOpened, setDropdownOpened] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)
    function handleHideDropdown() {
        setDropdownOpened(false)
    }

    function handleShowDropdown() {
        setTimeout(() => {
            setDropdownOpened(true)
        }, 250);
    }

    useEffect(() => {
        window.addEventListener("click", e => {
            if (!e.target.className.includes("categorias")) {
                setDropdownOpened(false)
            }
        })
    }, [])

    return (
        <header className="header">
            <div className="header-logo">
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
                menuOpened && <Menu />
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
                    <li className="header-categories-item">Promoções</li>
                    <li className="header-categories-item">Contato</li>
                    <li className="header-categories-item">Sobre</li>
                </ul>
                {dropdownOpened && <ul className="header-dropdown" onMouseLeave={handleHideDropdown}>
                    <li className="header-dropdown-item">todos</li>
                    <li className="header-dropdown-item">Eletronic</li>
                    <li className="header-dropdown-item">Jewelery</li>
                    <li className="header-dropdown-item">Men's clothing</li>
                    <li className="header-dropdown-item">Women's clothing</li>
                </ul>}
            </div>
            <nav className="header-nav">
                <a className="header-nav-item" href="/create">Crie sua conta</a>
                <a className="header-nav-item" href="/login">Entrar</a>
                <a className="header-nav-item" href="/buys">Compras</a>
                <button className="header-nav-cart">
                    <AiOutlineShoppingCart size={16} />
                </button>
            </nav>
        </header>
    )
}