import React from 'react'
import classes from "./styles.module.scss";
import first from "./images/first.png"
import second from "./images/second.png"
import thirt from "./images/thirt.png"
import MainImg from "./images/MainImg.png"

const MainPart = () => {
  return (
    <div className={classes.main}>
      <div className={classes.ColFather}>
        <div className={classes.col}>
          <h4>Supreme</h4>
          <p className={classes.pipi}>Liberty</p>
          <br></br>
          <p className={classes.price}>5600c</p>
          <div>
            <img className={classes.firstImage} src={first} alt='first' />
          </div>
        </div>

        <div className={classes.col2}>
          <h4>Supreme</h4>
          <p className={classes.pipi}>Liberty</p>
          <br></br>
          <p className={classes.price}>5600c</p>
          <div>
            <img className={classes.firstImage} src={second} alt='second' />
          </div>
        </div>

        <div className={classes.col3}>
          <h4>Supreme</h4>
          <p className={classes.pipi}>Liberty</p>
          <br></br>
          <p className={classes.price}>5600c</p>
          <div>
            <img className={classes.firstImage} src={thirt} alt='first' />
          </div>
        </div>
      </div>

      {/* <img className={classes.elipse} src={elipse} alt='Ellipse' /> */}

      <div>
        <div className={classes.NewEra}>
          <p>Supreme & new era <span className={classes.span}>collabaration</span></p>
        </div>

        <div className={classes.btn}>
          <p className={classes.btn_text}>Открыть каталог</p>
        </div>
      </div>

      <div>
        <img className={classes.MainImg} src={MainImg} alt='MainImg' />
      </div>



    </div>
  )
}

export default MainPart;