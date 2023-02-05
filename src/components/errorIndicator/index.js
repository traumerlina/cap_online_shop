import React from 'react'

import classes from './styles.module.css'

const ErrorIndicator = () => {
  return (
    <div className={classes.contain}>
        <div className={classes.text}>
        <h1>404</h1>
        <p>Страница не найдена.</p>
        <p>Мы искали высоко и низко.</p>
        </div>
        <div className={classes.binoculars}>
        <div className={classes.leftlense}>
        <div className={classes.eye}></div>
        </div>
        <div className={classes.rightlense}>
        <div className={classes.eye}></div>
        </div>
        </div>
      </div>
  )
}

export default ErrorIndicator
