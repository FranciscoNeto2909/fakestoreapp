import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from "./pages/Home"
import Header from './components/header/Header';
import NoutFound from './pages/NotFound';
import About from './pages/About';
import Message from './components/Message';
import Cart from "./pages/Cart"
import './App.css';
import { useEffect } from 'react';
import { getProducts } from './services/productsSlice';
import BuyCard from "./components/BuyCard"
import PurchasedProducts from './pages/PurchasedProducts';
export default function App() {
  const isMsg = useSelector(data => data.app.isMessage)
  const prod = useSelector(data => data.products.productToBuy)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
      {isMsg && <Message />}
      {prod.length > 0 && <BuyCard />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/purchased' element={<PurchasedProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NoutFound />} />
      </Routes>
    </div>
  );
}