import { useContext } from "react"
import { NavLink, Outlet } from "react-router"
import { CartContext } from "../../context/CartContext"
import './Layout.css'

function Layout() {
    const { items } = useContext(CartContext)
    return (
        <>
            <nav className="navbar">
                <NavLink to="/" end>Catálogo</NavLink>
                <NavLink to="/cart">Carrito ({items.length})</NavLink>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout