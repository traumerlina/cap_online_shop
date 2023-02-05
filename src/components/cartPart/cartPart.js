import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../actions/cartActions';

const CartPart = () => {
  const[show, setShow] = useState(false);

  const dispatch = useDispatch();

  const { cartItems } = useSelector(state => state.cart)

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id))}

  const increaseQty = (id, quantity) => {
      const newQty = quantity + 1;

      if (newQty > 10) return;

      dispatch(addItemToCart(id, newQty))
  }

  const decreaseQty = (id, quantity) => {

      const newQty = quantity - 1;

      if (newQty <= 0) return;

      dispatch(addItemToCart(id, newQty))

  }
  return ( 
    <div>  
    
    <nav className={classes.ToHome}>
      <li ><Link to="/" > Главная  </Link></li>
      <li className={classes.iconn}><a><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /></a></li>
      <li className={classes.cat}><Link to="/catalog" > Каталог  </Link></li>
    </nav>
  

    {cartItems.map(item => (
      <div  key={item.product}>
          <hr />

          <div  >
              <div >
                  <div >
                      <img src={item.image} alt="Laptop" height="96" width="144" />
                  </div>

                  <div >
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>


                  <div >
                      <p id="card_item_price">${item.price}</p>
                  </div>

                  <div >
                      <div >
                          <span className="btn btn-danger minus" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                          <input type="number"  value={item.quantity} readOnly />
                          

                          <span className="btn btn-primary plus" onClick={() => increaseQty(item.product, item.quantity)}>+</span>
                      </div>
                  </div>

                  <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                      <i id="delete_cart_item"  onClick={() => removeCartItemHandler(item.product)} ></i>
                  </div>

              </div>
          </div>
          <hr />
      </div>
    ))}
    
    <ul className={classes.cart}> 
    
        <div className={classes.block}>
        <li className={classes.cart1}>Ваша информация</li>
        <input className={classes.cart2} placeholder='Имя'></input>
        <input className={classes.cart3}  placeholder='+996-772218466'></input>
        </div>
        <span type="button"  className={classes.cart4} onClick={() => setShow(true) }>Купить</span>
        
    </ul>
    
  <Modal show={show}/>
    </div>
  )
}

export default CartPart;    