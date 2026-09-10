import { createContext, useState, type ReactNode } from "react";
import type { Product } from "../data/product";

interface CartContextType {
    items: Product[]
    addToCart: (product: Product) => void 
}

export const CartContext = createContext<CartContextType>({
    items: [],
    addToCart: () => {}
})

export function CartProvider({children}: {children : ReactNode}) {
    const [items, setItems] = useState<Product[]>([])

    function addToCart(product: Product) {
        setItems([...items, product])
    }

    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}