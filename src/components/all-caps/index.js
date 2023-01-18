import React from 'react'; 
import classes from "./styles.module.scss"; 
import { Link } from 'react-router-dom'; 
 
const AllCaps = ({cap}) => { 
    const {id, description, name, price, image} = cap; 
  return ( 
    <Link to={'/details/'+ id}> 
        <div className={classes.cap_list_item}> 
            <div style={{backgroundImage: `url(${image})`}} className={classes.cap_list_item_img}></div> 
            <div className={classes.cap_list_item_desc}> 
                <div> 
                    <h2>{name}</h2> 
                    <p>{description}</p> 
                </div> 
                <p>{price}c</p> 
            </div>   
        </div> 
    </Link> 
  ) 
} 
 
export default AllCaps;