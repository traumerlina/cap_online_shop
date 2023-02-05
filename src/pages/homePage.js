import React from 'react';
import TopPart from '../components/topPartHP';
import MainPart from '../components/mainPartHP'
import BottomPartHP from '../components/bottomPartHP';
import TopSlider from '../components/topSlider';
import SliderPart from '../components/slaider/Slider';
import AboutSite from '../components/aboutSite';
import ExtraMenu from '../components/extraMenu';
import Footer from '../components/footer';




const HomePage = () => {
 

  return (
    <div>
    <TopPart/>
    <MainPart/>
    <TopSlider/>
    <ExtraMenu/>
    <SliderPart/>
    <BottomPartHP/>
    <AboutSite/>
    <Footer/>
    </div>

    
    
  )
}

export default HomePage