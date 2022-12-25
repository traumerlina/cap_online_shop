import React from 'react';
import Caplist from '../components/caplist';
import Footer from '../components/footer';
import TopPartKP from '../components/topPartKP';
import classes from "./styles.module.scss";

const CatalogPage = () => {
  return (
    <div>
      <TopPartKP/>
      <div className={classes.div}>
        <Caplist/>
      </div>
      <Footer/>
    </div>

  )
}

export default CatalogPage;