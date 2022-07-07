import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Products from './pages/Products';
import NAvBar from './components/NavBar';
import NoutFound from './pages/NotFound';
import About from './pages/About';
import BoughtAlert from './components/BoughtAlert';
import Cart from "./pages/Cart"
import './App.css';

export default function App() {
  return (
    <>
    <NAvBar/>
    <BoughtAlert/>
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