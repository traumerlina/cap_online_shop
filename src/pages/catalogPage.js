import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import TopPartKP from '../components/topPartKP';
import LoaderIndicator from '../components/loaderIndicator';
import classes from "./style.module.scss";
import Product from '../components/all-caps';
import SortPopup from '../components/sortPart/SortUp';
import { setSortBy } from '../actions/productActions';


const CatalogPage = () => {

  const [page, setCurrentPage] = useState(1)
  // const [category, setCategory] = useState('')
  const dispatch = useDispatch();

  const {products,loading, error} = useSelector(state => state.products)
  const { sortBy } = useSelector(({ filters }) => filters);

  // console.log(sortBy , "-- sortBy");

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const sortIems =[ 
      {name: 'Популярные', type: 'rates', order: 'desc'}, 
      {name: 'Сначала дешевые', type: 'price', order: 'asc'}, 
      {name: 'Сначала дорогие',  type: 'price', order: 'desc'}, 
      {name: 'Новинки',  type: 'name', order: 'asc'}, 
        ];

  useEffect(() => {
      if (error) {
          return alert("Error")
      }

      dispatch(getProducts(page, sortBy));


  }, [dispatch, error, page, sortBy]);

  

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    // let count = productsCount;
    // if (keyword) {
    //     count = filteredProductsCount
    // }  

  return (
    <Fragment>
        {loading ? <LoaderIndicator/> : (
          <Fragment>
            <TopPartKP/>
            <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
            
            <div className={classes.sortContainer}>
            
            </div>
            <section id="products">
            
            <div className={classes.cap_list}>
                {products.map((obj) => (
                    <Product key={obj.id} product={obj}/>
                ))}
              </div>  
            
            </section>

            

            <ul className={classes.pagination}>
                {
                  [...Array(4)].map((_,i) => (
                    <li key={i} onClick={() => setCurrentPageNo(i+1)} className={page === i+1  ? classes.active : ' ' }>{i + 1}</li>
                  ))
                }
          </ul>
            </Fragment>
        )}
    </Fragment>
  )
  
  
}

export default CatalogPage;