import { useState } from "react"
import type { Product } from "../../data/product"
import './ProductCard.css'

interface ProductCardProps {
    product: Product
}

function ProductCard ({product}: ProductCardProps){
    const [quantity, setQuantity] = useState(0)

    return (
    <article className="product-card">
        <img className="product-card-image" src={product.image} alt={product.name}/>
        <div className="product-card-body">
            <h3 className="product-card-name"> {product.name}</h3>
            <p className="product-card-description">{product.description}</p>
            <div className="product-card-quantity">
                <button className="product-card-quantity-button" onClick={()=> setQuantity(quantity-1)}> - </button>
                <span className="product-card-quantity-value">{quantity}</span>
                <button className="product-card-quantity-button" onClick={()=> setQuantity(quantity+1)}> + </button>
            </div>
        </div>
        
    </article>)
}

export default ProductCard