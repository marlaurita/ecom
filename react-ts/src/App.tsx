
import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import { products } from './data/product'
import { CartContext } from './context/CartContext'

function App() {
  const [contador, setContador] = useState(0)
  const {items} = useContext(CartContext)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [productsBE, setProductsBE] = useState([])
  const [search, setSearch] = useState('')
  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products")

        if (!response.ok) {
          throw new Error("Falló la carga de productos")
        }

        const data = await response.json()
        setProductsBE(data.products)
      } catch (err: any)  {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    } 

    fetchProducts()
  }, [])

  const filteredProducts = productsBE.filter((product: any) => 
    product.title.toLowerCase().includes(search.trim().toLowerCase()))

  if (loading) return <p>Loading</p>
  if (error) return <p>{error}</p>

  return (
    <section id="catalog">
      <div className="catalog-header">
        <h1>Catálogo</h1>
        <p>Productos disponibles</p>

        <button onClick={() => setContador(contador +1)}> Contador equivale a {contador}</button>
        <button onClick={() => inputEl.current?.focus()}>Hacer una busqueda</button>
        <p> Carrito: {items.length} producto(s)</p>
      </div>

      <input type='search'
      placeholder='Buscar Productos...'
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      ref={inputEl}/>
       
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No se encontraron productos para: {search}</p>
        ) : (
          filteredProducts.map((product: any) => (
          <ProductCard product={product} key={product.id}/>
        ))
        )
      }
      </div>

    </section>
  )
}

export default App
