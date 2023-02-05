import React from 'react'; 
import classes from "./styles.module.scss"; 
import { Link } from 'react-router-dom';

 
const Product = ({product}) => { 
     
  return ( 
    <div className={classes.cap_list_item}> 
        <div style={{backgroundImage: `url(${product.image})`}} className={classes.cap_list_item_img}></div>  
        <div className={classes.cap_list_item_desc}> 
            <div> 
                <h2><Link to={`/${product.id}`}>{product.name}</Link></h2> 
                <p>{product.description}</p> 
            </div> 
            <p>{product.price}c</p> 
        </div>   
    </div> 
    
  ) 
} 
 
export default Product