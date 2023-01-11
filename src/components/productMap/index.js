import React from "react";
import classes from "./styles.module.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import first from './first.png';
import second from './second.png';
import third from './third.png';
import fourth from './fourth.png';

const ProductMap = () => {
    return (
        <div className={classes.conteyner}>
          <nav className={classes.ToHome}>
             <li ><Link to="/" > Home  </Link></li>
             <li className={classes.iconn}><a href><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /> </a></li>
             <li ><Link to="/" > Каталог  </Link></li>
             <li className={classes.iconn}><a href><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /> </a></li>
             <li className={classes.cat}> Детали продукта </li>
          </nav>

        <div className={classes.frameone}></div>
        <div className={classes.picone}>
                <img src={first} alt = 'first' width='483px' height='322px;'/>
        </div>
        <div className={classes.frametwo}></div>
        <div className={classes.pictwo}>
                <img src={second} alt = 'second' width='127px' height='103px;'/>
        </div>
        <div className={classes.framethree}></div>
        <div className={classes.picthree}>
                <img src={third} alt = 'third' width='126px' height='101px;'/>
        </div>
        <div className={classes.framefour}></div>
        <div className={classes.picfour}>
                <img src={fourth} alt = 'fourth' width='128px' height='103px;'/>
        </div>

        <div className={classes.main}>
            <h5 className={classes.title}>NEW ERA</h5>
            <p className={classes.text}>BLACK SNAPBACK 59 FIFTY</p>
        </div> 

        <div className={classes.frame1}></div>
            <p className={classes.text1}> S </p>
        <div className={classes.frame2}></div>
            <p className={classes.text2}> M </p>
        <div className={classes.frame3}></div>
            <p className={classes.text3}> L </p>
        <div className={classes.frame4}></div>
            <p className={classes.text4}> XL </p>
        <div className={classes.frame5}></div>
            <p className={classes.text5}> - </p>
            <p className={classes.text6}> 1 </p>
            <p className={classes.text7}> + </p>
            <p className={classes.text8}> 3200сом </p>

        <div className={classes.rectangle}></div>
            <p className={classes.text9}> Добавить в корзину </p>
        </div>   

    )
}

export default ProductMap;