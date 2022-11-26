import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages';
import CartPage from '../../pages/cartPage';
import CatalogPage from '../../pages/catalogPage';
import MapPage from '../../pages/mapPage';
import NoPage from '../../pages/NoPage';
import Header from '../header';


const App = () => {
  return (
    <main className='container' role="main">
      <Header/>
        <Routes>
            <Route path='/' element={<Navigate to = "/home-page" replace />}/>
            <Route path='/home-page' element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/> 
            <Route path='/catalog' element={<CatalogPage/>}/>
            <Route path='/about' element={<h1>abaut</h1>}/>
            <Route path='*' element={<NoPage/>}/>

        </Routes>
    </main>
  )
}

export default App;