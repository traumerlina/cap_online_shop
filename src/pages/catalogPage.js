import React, { useState } from 'react';
import Caplist from '../components/caplist';
import Footer from '../components/footer';
import TopPartKP from '../components/topPartKP';
import classes from "./styles.module.scss";
import Sort from '../components/sort';

const CatalogPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType]= useState({
    name: 'Популярные',
    sortProperty: 'rates',
  });

  React.useEffect(() => {
    setIsLoading(true);

    // const sortBy = 
    // const order = ;

    fetch(
      `https://63c2e2d68bb1ca34755a1b8c.mockapi.io/fun?sortBy=${sortType.sortProperty}&order=${sortType.sortProperty}`
    )
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [sortType] );

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