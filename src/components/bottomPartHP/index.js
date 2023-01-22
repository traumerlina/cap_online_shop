import React from "react"; 
import classes from "./styles.module.scss" 
 
const BottomPartHP = () => { 
    return( 
        <div className={classes.bottom_main}> 
            <div className={classes.info_number}> 
             <p>CUSTOM CUPS в цифрах</p>  
            </div> 
            
             <div className={classes.sells_info}> 
                <p className={classes.num1}>12000</p> 
                <p className={classes.word1}>проданных кепок</p> 
            </div> 
            <div className={classes.experience}> 
                <p className={classes.num2}>9</p> 
            <p className={classes.word2}>лет на рынке</p> 
            </div> 
            <div className={classes.customers}> 
                <p className={classes.num3}>8500</p> 
            <p className={classes.word3}>довольных клиентов</p> 
            </div> 
           </div> 
            
         
    ) 
} 
 
export default BottomPartHP;
