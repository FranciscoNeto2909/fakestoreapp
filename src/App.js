import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from "./pages/Home"
import Header from './components/header/Header';
import NoutFound from './pages/NotFound';
import About from './pages/About';
import Message from './components/Message';
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import './App.css';
import { useEffect, useState } from 'react';
import { getProducts } from './services/productsSlice';
import BuyCard from "./components/BuyCard"
import PurchasedProducts from './pages/PurchasedProducts';
import Promotions from './pages/Promotions';
import Sale from './pages/Sale';
import CepForm from './components/cepForm/CepForm';

export default function App() {
  const isMsg = useSelector(data => data.app.isMessage)
  const prod = useSelector(data => data.products.productToBuy)
  const dispatch = useDispatch()
  const [insertinCep, setInsertingCep] = useState(false);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='App'>
      <Header setInsertingCep={setInsertingCep} insertingCep={insertinCep} />
      {insertinCep && <CepForm setInsertingCep={setInsertingCep} />}
      {isMsg && <Message />}
      {prod.length > 0 && <BuyCard />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/minhas-compras' element={<PurchasedProducts />} />
        <Route path='/promoções' element={<Promotions />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/vendas' element={<Sale />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/*' element={<NoutFound />} />
      </Routes>
    </div>
  );
}