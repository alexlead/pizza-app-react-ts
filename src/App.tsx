import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container App">
      <Header/>
      <hr />
      <Routes>
         <Route path='/' element={<Home/>} />
         
      </Routes>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
