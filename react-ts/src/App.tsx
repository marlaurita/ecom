
import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import { products } from './data/product'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <section id="catalog">
      <div className="catalog-header">
        <h1>Catálogo</h1>
        <p>Productos disponibles</p>
        <button onClick={() => setContador(contador +1)}> Contador equivale a {contador}</button>

      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </section>
  )
}

export default App
