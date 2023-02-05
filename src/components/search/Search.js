import React, { useEffect,useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { searchProducts } from '../../actions/productActions';
import Product from '../all-caps';
import classes from "./styles.module.scss";
import {faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
    const [term, setTerm] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(searchProducts(term));
    setTerm("");
  };

    const dispatch = useDispatch();
    const { word} = useSelector(state => state.search)
    
    console.log(term);
    useEffect(() => {
        dispatch(searchProducts);
  
  
    }, [dispatch ]);

   

  return (
    
    <section id="products">
        <div className={classes.inp}>
            <form onSubmit={submitHandler}>
            <input
                type="text"
                value={term}
                placeholder="Search Items"
                onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
            </button> 
            <FontAwesomeIcon className={classes.cart} icon={faMagnifyingGlass} />
            
            </form>
        </div>
    <div className={classes.cap_list}>
        {word
        .filter((item) => {return item.description.toLowerCase().includes(term.toLowerCase());})
        .map((item, index) => (
        <Product key={index} product={item} />))}
    </div>
    </section>
  )
}

export default Search