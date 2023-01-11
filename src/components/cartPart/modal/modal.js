import React from "react";
import classes from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Modal = props => {
    if(!props.show){
        return null
    }

    return (
    

    <div className={classes.modal}>
    <ul className={classes.contentmodal}>
        <div className={classes.check}><FontAwesomeIcon className={classes.check1} icon={faCircleCheck} /></div>
        <li className={classes.modalH1}><p>Спасибо
Ваш заказ принят  
Ожидайте с Вами скоро свяжутся</p></li>
       <Link to="/" >  <button className={classes.modalhome}>На главную </button> </Link>
    </ul>
   
    </div>
    )}
    export default Modal

