import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal/modal';
// import CartPage from '../../pages/cartPage';

const CartPart = () => {
  const[show, setShow] = useState(false)
  return ( 
    <>  
    <nav className={classes.ToHome}>
      <li ><Link to="/" > Главная  </Link></li>
      <li className={classes.iconn}><a href><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /></a></li>
      <li className={classes.cat}>Kаталог</li>
    </nav>

    
    
    <ul className={classes.cart}> 
    
    <div className={classes.block}></div>

        <li className={classes.cart1}>Ваша информация</li>
        <input className={classes.cart2} placeholder='Имя'></input>
        <input className={classes.cart3}  placeholder='+996-772218466'></input>
        <button className={classes.cart4} onClick={() => setShow(true) }>купить</button>
    </ul>
  <Modal show={show}/>
    </>
  )
}

export default CartPart;    