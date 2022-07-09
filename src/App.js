import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from "./pages/Home"
import Products from './pages/Products';
import NAvBar from './components/NavBar';
import NoutFound from './pages/NotFound';
import About from './pages/About';
import Message from './components/Message';
import Cart from "./pages/Cart"
import './App.css';

export default function App() {
  const isMsg = useSelector(data => data.app.isMessage)
  return (
    <>
    <NAvBar/>
    {isMsg && <Message/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<NoutFound/>}/>
      </Routes>
    </>
  );
}