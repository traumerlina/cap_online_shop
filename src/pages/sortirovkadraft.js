// import React, { useEffect, Fragment, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../actions/productActions';
// import TopPartKP from '../components/topPartKP';
// import LoaderIndicator from '../components/loaderIndicator';
// import classes from "./style.module.scss";
// import Product from '../components/all-caps';
// // import { setSortBy } from '../actions/productActions';

// const sortirovka =[ 
//   {name: 'Популярные', type: 'rates', order: 'desc'}, 
//   {name: 'Сначала дешевые', type: 'price', order: 'asc'}, 
//   {name: 'Сначала дорогие',  type: 'price', order: 'desc'}, 
//   {name: 'Новинки',  type: 'name', order: 'asc'}, 
//     ]; 

// const Sort = ({value, onChangeSort}) => { 
//   const [open, setOpen] = useState(false); 
//   // const [selected, setSelected]=useState(0); 

//    const onClickSortirovkaItem = (i)=>{ 
//       onChangeSort(i); 
//       setOpen(false); 
//    }; 
//       return( 
//           <div className={classes.sort}> 
//            <div className={classes.sort_label}> 
             
//             <span onClick={()=> setOpen(!open)} className={classes.popular}>{value.name}</span>  
//            </div> 
//            { open && ( 
//            <div className={classes.sort_popup}> 
//               <ul> 
//                   { 
//                       value.map((obj, i) => ( 
//                           <li key={i}  
//                           onClick={()=> onClickSortirovkaItem(obj.type)}  
//                           className={value === obj.type ? 'active' : ''}>{obj.name}</li> 
//                       )) 
//                   } 
//               </ul> 
//            </div>)}     
//           </div> 
//       ) 
//   } 



// const CartPage = () => {
//   const dispatch = useDispatch();
//   const [page, setCurrentPage] = useState(1)
//   const {products,loading, error} = useSelector(state => state.products)
//   // const {sortBy} = useSelector(state => state.filters)

//   useEffect(() => {
//       if (error) {
//           return alert("Error")
//       }

//       dispatch(getProducts(page,sortBy));


//   }, [dispatch, error, page, sortBy]);

  

//     function setCurrentPageNo(pageNumber) {
//         setCurrentPage(pageNumber)
//     }

//     // let count = productsCount;
//     // if (keyword) {
//     //     count = filteredProductsCount
//     // }
//     const onSelectSortType = ((type) => {
//       dispatch(setSortBy(type));
//     }, []);


//   const [items, setItems] = useState([]); 
//   const [sortType, setSortType]= useState({ 
//     name: 'Популярные', type: 'rates', order: 'desc'
//   }); 
 
 

//   return (
//     <Fragment>
//         {loading ? <LoaderIndicator/> : (
//           <Fragment>
//             <TopPartKP/>
            
//             <div className={classes.sortContainer}>
//             <Sort onClick={onSelectSortType} value={sortirovka} onChangeSort={(i) => setSortType(i)} /> 
//             </div>
//             <section id="products">
            
//             <div className={classes.cap_list}>
//                 {products.map((obj) => (
//                     <Product key={obj.id} product={obj}/>
//                 ))}
//               </div>  
            
//             </section>

//             <ul className={classes.pagination}>
//                 {
//                   [...Array(4)].map((_,i) => (
//                     <li key={i} onClick={() => setCurrentPageNo(i+1)} className={page === i+1  ? classes.active : ' ' }>{i + 1}</li>
//                   ))
//                 }
//           </ul>
//             </Fragment>
//         )}
//     </Fragment>
//   )
  
  
// }

// export default CartPage;