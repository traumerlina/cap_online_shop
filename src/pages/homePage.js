import React from 'react';
import TopPart from '../components/topPartHP';
import MainPart from '../components/mainPartHP'
import BottomPartHP from '../components/bottomPartHP';
import Footer from '../components/footer';
import ScrollCheck from '../components/scrollCheck';
import TopSlider from '../components/topSlider';
import ExtraMenu from '../components/extraMenu';

const HomePage = () => {
  return (
    <div>
      <TopPart/>
      <TopSlider/>
      <ExtraMenu/>
      {/* <ScrollCheck/> */}

        <MainPart/>
        <BottomPartHP/>

        <Footer/>
 
    </div>
  )
}

export default HomePage