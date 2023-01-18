import React, { useState } from "react";
import classes from '../sort/styles.module.scss'


const Sort = ({value, onChangeSort}) => {
const [open, setOpen] = useState(false);
// const [selected, setSelected]=useState(0);
const sortirovka =[
    {name: 'Популярные', sortProperty: 'rates'},
    {name: 'Сначала дешевые', sortProperty: 'price'},
    {name: 'Сначала дорогие',  sortProperty: 'price'},
    {name: 'Новинки',  sortProperty: 'brand'},
      ];

 const onClickSortirovkaItem = (i)=>{
    onChangeSort(i);
    setOpen(false);
 };

    return(
        <div className={classes.sort}>
         <div className={classes.sort_label}>
          
          <span onClick={()=> setOpen(!open)} className={classes.popular}>{value.name}</span>
          
         </div>
         { open && (
         <div className={classes.sort_popup}>
            <ul>
                {
                    sortirovka.map((obj, i) => (
                        <li key={i} 
                        onClick={()=> onClickSortirovkaItem(obj)} 
                        className={value.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}</li>
                    ))
                }
            </ul>
         </div>)}
         
        </div>
    )
}

export default Sort;