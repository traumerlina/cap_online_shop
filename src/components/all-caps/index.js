import React from 'react';
import classes from "./styles.module.scss";

const AllCaps = ({cap}) => {
    const {description, name, price, image} = cap;
  return (
    <div className={classes.cap_list_item}>
        <div className={classes.cap_list_item_cover}>
            <img src= {image} alt='cover'/>
        </div>

        <div className={classes.cap_list_item_details}>

            <div className={classes.cap_list_item_description}>{description}</div>
            <div className={classes.cap_list_item_name}> {name} </div>
            <div className={classes.cap_list_item_price}> {price} </div>
        </div>
    </div>
  )
}

export default AllCaps;