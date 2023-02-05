import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import { HomePage } from './pages';
import { CatalogPage } from './pages';
import { CartPage } from './pages';

// components
import Header from './components/header';
import ProductDetails from './components/productDetails';


import './App.scss';

const test = ""

function App() {
  return (
    <div className="App">

      {
        test ? <div>Hello world

        </div> : <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />

          </Routes>

        </BrowserRouter>
      }

    </div>
  );
}


export default App;