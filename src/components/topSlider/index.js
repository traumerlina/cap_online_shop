import React from 'react'

import classes from './styles.module.css'
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'

const TopSlider = () => {
  return (
    <>
      <div className={classes.col}>
        <p className={classes.data}>2021</p>
        <h4 className={classes.name}>New Era</h4>
        <p className={classes.author}>Houston Rockets</p>
        <br></br>
        <p className={classes.price}>2399c</p>
        <div>
        <img className={classes.firstImage} src={first} alt='' />
        </div>
      </div>

      <div className={classes.col2}>
        <p className={classes.data2}>2021</p>
        <h4 className={classes.name2}>New Era</h4>
        <p className={classes.author2}>Chicago WhiteSox</p>
        <br></br>
        <p className={classes.price2}>2399c</p>
        <div>
        <img className={classes.firstImage} src={second} alt='' />
        </div>
      </div>

      <div className={classes.col3}>
        <p className={classes.data3}>2021</p>
        <h4 className={classes.name3}>New Era</h4>
        <p className={classes.author3}>LA Lakers</p>
        <br></br>
        <p className={classes.price3}>2399c</p>
        <div>
        <img className={classes.firstImage} src={third} alt='' />
        </div>
      </div>
      </>

  )
    }

    

export default TopSlider
