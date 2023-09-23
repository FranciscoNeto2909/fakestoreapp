import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './services/productsSlice';
import Home from "./pages/home/Home"
import NoutFound from './pages/NotFound';
import About from './pages/about/About';
import Cart from "./pages/cart/Cart"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import PurchasedProducts from './pages/purchase/PurchasedProducts';
import Promotions from "./pages/promotion/Promotions"
import Sale from "./pages/sale/Sale"
import Product from './pages/Product/Product';
import Header from './components/header/Header';
import Message from './components/Message';
import CepForm from './components/cepForm/CepForm';
import './App.css';

export default function App() {
  const isMsg = useSelector(data => data.app.isMessage)
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NoutFound />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/vendas' element={<Sale />} />
        <Route path='/product' element={<Product />} />
        <Route path='/register' element={<Register />} />
        <Route path='/carrinho' element={<Cart />} />
        <Route path='/promoções' element={<Promotions />} />
        <Route path='/minhas-compras' element={<PurchasedProducts />} />
      </Routes>
    </div>
  );
}