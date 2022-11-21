import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages';


const App = () => {
  return (
    <main className='container' role="main">
        <Routes>
            <Route path='/' element={<Navigate to = "/home-page" replace />}/>
            <Route path='/home-page' element={<HomePage/>}/>
        </Routes>
    </main>
  )
}

export default App;