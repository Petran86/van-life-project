import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Vans from './components/Vans/Vans';
import VanDetail from './components/VanDetail/VanDetail';
import Dashboard from './components/Host/Dashboard';
import Income from './components/Host/Income';
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';
import Reviews from './components/Host/Reviews';
import HostVanInfo from './components/Host/HostVanInfo';
import HostVanPhotos from './components/Host/HostVanPhotos';
import HostVanPricing from './components/Host/HostVanPricing';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
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

          <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path='price' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
