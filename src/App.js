import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Vans from './components/Vans/Vans';
import VanDetail from './components/VanDetail/VanDetail';
import './App.css';

import "./server"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='nav-home'>#VANLIFE</Link>
        <nav>
          <Link to="/about" className='nav-about'>About</Link>
          <Link to="/vans" className='nav-about'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
      <div className='footer'>
        <p>&copy; 2024 #VANLIFE</p>
      </div>

    </BrowserRouter>
  );
}

export default App;
