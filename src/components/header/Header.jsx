import "./header.css"
import logo from "../../images/logo.png"
import { useEffect, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Menu from "../menu/Menu"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setFilteredCat, setSearchedProd } from "../../services/productsSlice"

export default function NavBar({ setInsertingCep, insertingCep }) {
    const [dropdownOpened, setDropdownOpened] = useState(false)
    const [menuOpened, setMenuOpened] = useState(false)
    const [searchProd, setSearchProd] = useState("")
    const filteredCat = useSelector(data => data.products.filteredCat)
    const cep = useSelector(data => data.app.cep)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSetFilter(filter) {
        dispatch(setFilteredCat(filter))
    }

    function handleHideDropdown() {
        setDropdownOpened(false)
    }

    function handleShowDropdown() {
        setDropdownOpened(true)
    }

    function handleSearchProd() {
        dispatch(setSearchedProd(searchProd))
        console.log(searchProd)
    }

    function handleChangeSearchProd(prod) {
        setSearchProd(prod)
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
                <input className="header-search-input" type="text" placeholder="Buscar produtos, marcas e muito mais..." onChange={e => handleChangeSearchProd(e.target.value)} />
                <button className="header-search-btn" onClick={handleSearchProd}>
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
                <img className="header-anuncio-img " src="https://cdn-icons-png.flaticon.com/512/6713/6713658.png" alt="" />
                <p className="header-anuncio-text">Frete gratis na primeira compra!</p>
            </div>
            {cep.location ?
                <div className="header-cep">
                    <p className="header-cep-text">{cep.cep} {cep.location}</p>
                </div> :

                < div className="header-cep" onClick={() => setInsertingCep(!insertingCep)}>
                    <img className="header-cep-img" src="https://cdn-icons-png.flaticon.com/512/106/106121.png" alt="" />
                    <p className="header-cep-text">Informe seu <span className="header-cep-span">Cep</span></p>
                </div>}
            <div className="header-categories">
                <ul className="header-categories-list">
                    <li onClick={handleShowDropdown} className="header-categories-item categorias">Categorias</li>
                    <li className="header-categories-item" onClick={() => navigate("/promoções")}>Promoções</li>
                    <li className="header-categories-item" onClick={() => navigate("/contacs")}>Contato</li>
                    <li className="header-categories-item" onClick={() => navigate("/sobre")}>Sobre</li>
                </ul>
                {dropdownOpened && <ul className="header-dropdown" onMouseLeave={handleHideDropdown}>
                    <li className={`header-dropdown-item ${filteredCat === "" && "categorie-selected"}`} onClick={() => handleSetFilter("")}>todos</li>
                    <li className={`header-dropdown-item ${filteredCat === "electronics" && "categorie-selected"}`} onClick={() => handleSetFilter("electronics")}>Eletronic</li>
                    <li className={`header-dropdown-item ${filteredCat === "jewelery" && "categorie-selected"}`} onClick={() => handleSetFilter("jewelery")}>Jewelery</li>
                    <li className={`header-dropdown-item ${filteredCat === "men's clothing" && "categorie-selected"}`} onClick={() => handleSetFilter("men's clothing")}>Men's clothing</li>
                    <li className={`header-dropdown-item ${filteredCat === "women's clothing" && "categorie-selected"}`} onClick={() => handleSetFilter("women's clothing")}>Women's clothing</li>
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
        </header >
    )
}