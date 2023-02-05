import React from "react"; 
import classes from "./styles.module.scss" 
 
const Footer = () =>{ 
    return ( 
        <div className={classes.footer_main}> 
 
        <div className={classes.divider}> </div> 
        <div className={classes.iconka}> </div> 
        <div className={classes.icon_brand}> 
            <p>custom caps</p> 
        </div> 
        <div className={classes.icon_words}> 
            <p>Магазин кепок</p> 
        </div> 
 
        <div className={classes.icons}> 

         <div className={classes.linkedin}>
             <i class="fa-brands fa-linkedin-in"></i>
             </div>
            <div className={classes.linked_oval}>  </div>  
           <div className={classes.facebook}>
           <i className="fa-brands fa-facebook-f"></i>
            </div> 
            <div className={classes.facebook_oval}></div> 
            <div className={classes.twitter}>
            <i class="fa-brands fa-twitter"></i>
            </div> 
            <div className={classes.twitter_oval}></div> 
        </div> 
 
 
        <div className={classes.copyright_info}> 
            <p>© Copyright 2019 - Lift Media</p> 
        </div> 
        </div> 
    ) 
} 
 
export default Footer
