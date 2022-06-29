import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getProducts } from './api';

import Home from "./pages/Home"
import Products from './pages/Products';
import './App.css';
import NAvBar from './components/NavBar';
import NoutFound from './pages/NotFound';
import About from './pages/About';

export default function App() {
  const[prod, setProd] = useState([])

  async function handleGetProducts() {
    const res = await getProducts()
    setProd(res)
  }
  handleGetProducts()
  return (
    <>
    <NAvBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products products={prod}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<NoutFound/>}/>
      </Routes>
    </>
  );
}