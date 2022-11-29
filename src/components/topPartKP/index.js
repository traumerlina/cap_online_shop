import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TopPartKP = () => {
  return (
    <div className={classes.conteyner}>
    <nav className={classes.ToHome}>
      <li ><Link to="/" > Главная  </Link></li>
      <li className={classes.iconn}><a href><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /> </a></li>
      <li className={classes.cat}>Kаталог</li>
    </nav>
    
    <div className={classes.buner}>
        <div className={classes.Muck}>
                <h1>НОВАЯ СЕРИЯ McLAREN</h1>
         </div>
    </div>
    </div>
  )
}

export default TopPartKP;