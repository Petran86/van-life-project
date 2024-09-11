import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <nav className='navbar'>
          <Link to="/" className='nav-home'>#VANLIFE</Link>
          <Link to="/about" className='nav-about'>About</Link>
          <Link to="/about" className='nav-about'>Vans</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <div className='footer'>
          <p>&copy; 2024 #VANLIFE</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
