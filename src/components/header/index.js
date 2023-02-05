import React, {useState} from 'react';
import classes from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping    } from '@fortawesome/free-solid-svg-icons';
import { faBars    } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes} from 'react-router-dom';
import SearchPage from '../../pages/searchPage';
import Search from '../search/Search';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from '../../actions/productActions';



const Header = () => {
  
    return (
    <header className={classes.header}>
              <nav className={classes.homepage}>
                <div className={classes.cpan}>
              
                </div>
                <ul className={classes.img1} />
                <ul className={classes.frame}>
                  <li><Link to='/home-page'> Главная </Link></li>
                  <li><Link to='/catalog'> Каталог </Link></li>
                  <li><Link to='/'> Бренд</Link></li>
                  <li><Link to='/'> O нас </Link></li>
                </ul>

                {/* <Search/> */}
                

                <ul className={classes.line}>
                  <li className={classes.iconn}><a href= "/cart" ><FontAwesomeIcon className={classes.cart} icon={faBasketShopping} /> </a></li>
                  <li className={classes.l2} />
                  <li className={classes.l3} id='l3'><a href= " "><FontAwesomeIcon className={classes.cart} icon={faBars} /></a></li>
                </ul>

                
              </nav>
              
    </header> 

     );
}



export default Header;


// magnifying-glassmagnifying-glass