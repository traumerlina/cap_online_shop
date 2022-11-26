import React from "react";
import classes from "./styles.module.scss";
import first from './first.png';
import second from './second.png';
import third from './third.png'
import { Link } from "react-router-dom";
const TopPart = () => {
    return (
        <div className={classes.main}>
            <h1 className={classes.title}>NEW ERA</h1>
            <p className={classes.text}>Новая коллекция 2021 уже доступны на заказ яркие цвета, винтажный принт 70х,тематические группы и отличное качество</p>
            <div className={classes.picone}>
                <img src={first} alt = 'first' />
            </div>
           <div className={classes.pictwo}>
                <img src={second} alt = 'second' />
           </div>
           <div className={classes.picthree}>
                <img src={third} alt = 'third' />
           </div>
           <button><Link to='/catalog'>  Открыть каталог</Link> </button>
           <div className={classes.red}>
            <div className={classes.smallred}></div>
           </div>
           <div className={classes.yellow}></div>
        </div>
    )
}



export default TopPart;