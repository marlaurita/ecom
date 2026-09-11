import { useContext, useState } from "react"
import type { Product } from "../../data/product"
import './ProductCard.css'
import { CartContext } from "../../context/CartContext"

interface ProductCardProps {
    product: any
}

function ProductCard ({product}: ProductCardProps){
    const [quantity, setQuantity] = useState(0)
    const {addToCart} = useContext(CartContext)

    return (
    <article className="product-card">
        <img className="product-card-image" src={product.images[0]} alt={product.title}/>
        <div className="product-card-body">
            <h3 className="product-card-name"> {product.title}</h3>
            <p className="product-card-description">{product.description}</p>
            <div className="product-card-quantity">
                <button className="product-card-quantity-button" onClick={()=> addToCart(product)}> Agregar al carro </button>
               
            </div>
        </div>
        
    </article>)
}

export default ProductCard