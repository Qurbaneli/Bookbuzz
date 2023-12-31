import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

import "./App.css"

function App() {

  return (
    <div>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/product-detail/:bookId" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App