import React, { useState } from 'react';
import classes from "./style.module.scss";


const SearchPage = ({ history }) => {

    const [keyword, setKeyword] = useState('');
  
    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    

  return (
    <form onSubmit={searchHandler}>
        <div >
                <input
                    type="text"
                    className={classes.search_field}
                    placeholder="Enter Product Name ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="input-group-append">
                    <button  className={classes.search_btn}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>


        {/* <li className={classes.inp}><input type="text" className={classes.inp1} />
                  </li><li className={classes.icon}><a href= " "><FontAwesomeIcon className={classes.cart} icon={faMagnifyingGlass} /> </a></li>
                  <li className={classes.l1}>
                  </li> */}
    </form>
  )
}

export default SearchPage;