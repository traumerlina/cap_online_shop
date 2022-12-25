import React from 'react';
import TopPart from '../components/topPartHP';
import MainPart from '../components/mainPartHP'
import BottomPartHP from '../components/bottomPartHP';
import Footer from '../components/footer';
import TopSlider from '../components/topSlider';
const HomePage = () => {
  return (
    <div>
      <TopPart/>
      <MainPart/>
      <TopSlider/>
      <BottomPartHP/>
      <Footer/>
    </div>
  )
}

export default HomePage