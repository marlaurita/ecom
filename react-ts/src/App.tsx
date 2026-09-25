import { Route, Routes } from "react-router";

import './App.css'
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<CatalogPage/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="products/:id" element={<ProductDetailPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
