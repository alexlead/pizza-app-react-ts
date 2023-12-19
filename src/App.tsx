import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
    <div className="container App">
      <Header/>
      <hr />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/product' element={<Home/>} />
         <Route path='/product/:id' element={<Product/>} />
         <Route path='/cart' element={<Cart/>} />
         
      </Routes>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
