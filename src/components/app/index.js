import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages';
import CartPage from '../../pages/cartPage';
import CatalogPage from '../../pages/catalogPage';
import SearchPage from '../../pages/searchPage';
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
            <Route path='/search-page' element={<SearchPage/>}/>
            
        </Routes>
    </main>
  )
}

export default App;