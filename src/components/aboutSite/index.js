import React from 'react';
import classes from '../aboutSite/styles.module.scss'

const AboutSite = () => {
    return(
        <div className={classes.main}>
            <div className={classes.divider}></div>
            <div className={classes.products}>
                <span>Продукция</span>
                <div className={classes.products_p}>
                <p>Кепки</p>
                <p>Шапки</p>
                <p>Панамки</p>
                <p>Костомизация</p>
                <p>Другая продукция</p>
                <p>Эксклюзив</p>
                </div>
            </div>

            <div className={classes.about_company}>
                <span>О компании</span>
                <p>О Нас</p>
                <p>Контакты</p>
                
            </div>

            <div className={classes.input_main}>
                <span>Подписаться на новинки</span>
                <input type="email" className={classes.input_email}></input>
                <button className={classes.button_email}></button>
            </div>

            <div className={classes.pay}>
                <img className={classes.wallet} ></img>
                <div  className={classes.mastercard}  ></div>
                <div className={classes.visa}></div>
            </div>

            <p className={classes.number}>+996 755 999820</p>

        </div>
    )
}

export default AboutSite;