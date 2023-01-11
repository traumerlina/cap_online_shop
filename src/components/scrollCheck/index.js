import React, { useRef } from 'react'
import classes from './style.module.scss'
// import image1 from './images/60179430_9FIFTY_950NECECOMQ29051SAFGIACHW_SAFGIA_WHI_3QL.png'
// import images2 from './images/9375838928926.png'
// import images3 from './images/Без названия.png';



const ScrollCheck = () => {
  let imageContainerRef = useRef(null);

  // const { description, name, price, image } = cap;
   const img = ['image1, images2, images3']


  const prev = () => imageContainerRef.current.scrollLeft -= 250;
  const next = () => imageContainerRef.current.scrollLeft += 250;

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.topSelers}>TOP SELLERS</div>
        <div className={classes.page_conteiner}>
          <div className={classes.prev} onClick={prev}>
            {img.map((img => {return(<p>{img}</p>)} ))}

            {/* <div className={classes.cap_list_item}>
              <div className={classes.cap_list_item_cover}>
                <img src={image} alt='cover' />
              </div>

              <div className={classes.cap_list_item_details}>

                <div className={classes.cap_list_item_description}>{description}</div>
                <div className={classes.cap_list_item_name}> {name} </div>
                <div className={classes.cap_list_item_price}> {price} </div>
              </div>
            </div> */}



          </div>
          <div className={classes.slide_panel} ref={imageContainerRef}></div>
          <div className={classes.next} onClick={next}></div>
        </div>
      </div>

    </>

  )

}

export default ScrollCheck
