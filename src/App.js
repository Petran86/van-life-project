import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Vans from './components/Vans/Vans';
import VanDetail from './components/VanDetail/VanDetail';
import Layout from './components/Layout';
import './App.css';

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
      <div className='footer'>
        <p>&copy; 2024 #VANLIFE</p>
      </div>

    </BrowserRouter>
  );
}

export default App;
