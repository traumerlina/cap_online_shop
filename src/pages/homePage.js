import React from 'react';
import TopPart from '../components/topPartHP';
import MainPart from '../components/mainPartHP'
import BottomPartHP from '../components/bottomPartHP';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <TopPart/>
      <MainPart/>
      <BottomPartHP/>
      <Footer/>
    </div>
  )
}

export default HomePage