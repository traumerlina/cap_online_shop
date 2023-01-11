import React, { useState } from "react";
import classes from '../sort/styles.module.scss'


const Sort = ({value, onChangeSort}) => {
const [open, setOpen] = useState(false);
// const [selected, setSelected]=useState(0);
const sortirovka =['Популярные','Сначала дешевые', 'Сначала дорогие', 'Новинки'];

const onClickSortirovkaItem = (i)=>{
    onChangeSort(i);
    setOpen(false);
};
const sortName = sortirovka[value];

    return(
        <div className={classes.sort}>
         <div className={classes.sort_label}>
          
          <span onClick={()=> setOpen(!open)} className={classes.popular}>{sortName}</span>
          
         </div>
         { open && (
         <div className={classes.sort_popup}>
            <ul>
                {
                    sortirovka.map((name, i) => (
                        <li key={i} 
                        onClick={()=> onClickSortirovkaItem(i)} 
                        className={value == i ? 'active' : ''}>{name}</li>
                    ))
                }
            </ul>
         </div>)}
         
        </div>
    )
}

export default Sort;