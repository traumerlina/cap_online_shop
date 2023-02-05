import React, { Fragment, useState, useEffect } from "react";
import classes from "./styles.module.scss";
import LoaderIndicator from "../loaderIndicator";
import { Link, useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, clearErrors } from "../../actions/productActions";
import { addItemToCart } from '../../actions/cartActions';



const ProductDetails = ( ) => {

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    
    
    
   
    const { loading, error, product} = useSelector(state => state.productDetails)

    let sizeDict = 
    {
        3: "S",
        4: "M",
        5: "L",
        6: "XL"
    }
    const [size, setSize] = useState(product.size);
    console.log(product.size);
    
    
    const {id} = useParams();
   
    useEffect(() => {
        
        
        dispatch(getProductDetails(id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }


    }, [dispatch, error, id])

    function setSizeButton(size)
    {
        setSize(size);
    }

    const addToCart = () => {
        dispatch(addItemToCart( id, quantity));
        alert('Item Added to Cart')
    }

    const increaseQty = () => {
        setQuantity(qnt => qnt + 1)
    }

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(qnt => qnt - 1)
        }
    }
  
    return (
        <>
            {loading ? <LoaderIndicator /> : (
                <>
                    <div className={classes.conteyner}>

                    <nav className={classes.ToHome}>
                        <li><Link to="/" > Home  </Link></li>
                        <li className={classes.iconn}><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /></li>
                        <li><Link to="/catalog" > Каталог  </Link></li>
                        <li className={classes.iconn}><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /></li>
                        <li className={classes.cat}> Детали продукта </li>
                    </nav>
                        
                        <div className={classes.frameone}> </div> 
                        <div className={classes.picone}>
                                <img src={product.image} alt = 'first' width='483px' height='322px;'/>
                        </div>
                        <div className={classes.main}>
                            <h5 className={classes.title}>{product.name}</h5>
                            <p className={classes.text}>{product.description}</p>
                          
                        </div> 
                        
             
                    
                    
                    <div className={classes.sizes}>
                    {product.size?.map(function(elem)
                    {
                        return <span onClick={() => setSizeButton(elem)} key={elem} className={classes.sizes_block + " " + (size === elem ? classes.selected : '')}>{sizeDict[elem]}</span>;
                    })}
                    </div>
                    

                    <div className={classes.frame5}>
                        <span type="button" id="cart_btn" className="btn btn-light minus" onClick={decreaseQty}>-</span>
                        <input className="mw-100" type="number"  value={quantity} readOnly />  
                        <span type="button" id="cart_btn" className="btn btn-light plus" onClick={increaseQty}>+</span>
                        </div>
                    <p className={classes.text8}> {product.price * quantity}сом </p>
                    <div className={classes.but}>
                    <span type="button" id="cart_btn" onClick={addToCart}>Добавить в корзину</span>
                    </div>
                    </div>
                    
                    </>
                )}   
                    
        </>
    )
    
};

 

  
export default ProductDetails;