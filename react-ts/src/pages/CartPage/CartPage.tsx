import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartPage () {
    const { items } = useContext(CartContext)

    return (
        <>
            <p> Los items del carrito son: {items.length}</p>
        </>
    )
}

export default CartPage