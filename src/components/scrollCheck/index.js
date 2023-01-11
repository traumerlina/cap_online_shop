import React, { useRef } from 'react'
import classes from './style.module.scss'
import image1 from './images/60179430_9FIFTY_950NECECOMQ29051SAFGIACHW_SAFGIA_WHI_3QL.png'
import images2 from './images/9375838928926.png'
import images3 from './images/Без названия.png'



const ScrollCheck = () => {
  let imageContainerRef = useRef(null);

  const prev = () => imageContainerRef.current.scrollLeft -= 250;
  const next = () => imageContainerRef.current.scrollLeft += 250;

  return (
    <>
    <div className={classes.topSelers}>TOP SELLERS</div>
      <div className={classes.mainContainer}>

        <div className={classes.prev} onClick={prev}>
        <div className={classes.slide_panel} ref={imageContainerRef}>
              <div className={classes.main__head}>
            <div className={classes.main}>
              <img className={classes.firstImage} src={image1} alt='image1'></img>

              <div className={classes.container}>
                <p className={classes.adidas}>adidas</p>
                <p className={classes.textProperties}>San Francisco Baseball</p>
                <p className={classes.summ}>3800c</p>
              </div>

              <div className={classes.main2}>
                <div>
                  <img className={classes.firstImage} src={images2} alt='images2'></img>
                </div>
                <div className={classes.container}>
                  <p className={classes.adidas}>New Era</p>
                  <p className={classes.textProperties}>New York Yankies</p>
                  <p className={classes.summ}>3800c</p>
                </div>

                <div className={classes.main3}>
                  <div>
                    <img className={classes.firstImage} src={images3} alt='images3'></img>
                  </div>
                  <div className={classes.container}>
                    <p className={classes.adidas}>Nike</p>
                    <p className={classes.textProperties}>French Fries Series</p>
                    <p className={classes.summ}>4500c</p>
                  </div>

            </div>



                  <div className={classes.next} onClick={next}></div>
                </div>
              </div>
            </div>
          </div>








        </div>
      </div>
    </>

  )

}

export default ScrollCheck
