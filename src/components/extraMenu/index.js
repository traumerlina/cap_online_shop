import React from 'react'
import first from './image/first.png'
import second from './image/second.png'

import classes from './styles.module.css'

const ExtraMenu = () => {
  return (
    <div className={classes.contain}>
      <div className={classes.box1}>
        <img className={classes.img1} src={first}></img>
        <p className={classes.text1}>Кастомные</p>
        <p className={classes.text12}>Создай свой стиль</p>
      </div>
      <div >
      <img className={classes.img2} src={second}></img>
      <p className={classes.text2}>Эксклюзив</p>
        <p className={classes.text22}>Найди уникальные кепки</p>
      </div>
    </div>
  )
}

export default ExtraMenu
