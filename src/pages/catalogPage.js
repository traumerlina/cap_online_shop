import React, { useState } from 'react';
import Caplist from '../components/caplist';
import Footer from '../components/footer';
import TopPartKP from '../components/topPartKP';
import classes from "./styles.module.scss";
import Sort from '../components/sort';

const CatalogPage = () => {
  const [sortType, setSortType]= useState(0);
  console.log(sortType);
  return (
    <div>
      <TopPartKP/>
      <div className={classes.div}>

        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
     
        <Caplist/>
      
      </div>
      <Footer/>
    </div>

  )
}

export default CatalogPage;