import {React, useContext, useState, useEffect} from "react";
import classes from "./styles.module.scss";
import {connect} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CapsContext from '../context';
import { fetchCap } from '../../redux';
import Spinner from 'react-bootstrap/Spinner';
import first from './first.png';
import second from './second.png';
import third from './third.png';
import fourth from './fourth.png';

const ProductMap = (cap) => 
{
    const [counter, setCounter] = useState(1);
    let cap1 = cap.cap;
    let sizeDict = 
    {
        3: "S",
        4: "M",
        5: "L",
        6: "XL"
    }
    const [size, setSize] = useState(cap1.size[0]);
    
    function plusCount()
    {
        setCounter(count => count + 1);    
    }

    function minusCount()
    {
        setCounter(count => count - 1);
        if(counter <= 0)
        {
            setCounter(0);
        }  
    }

    function setSizeButton(size)
    {
        setSize(size);
    }

    if(cap1 != null){
    return (
        <div className={classes.conteyner}>
          <nav className={classes.ToHome}>
             <li><Link to="/" > Home  </Link></li>
             <li className={classes.iconn}><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /></li>
             <li><Link to="/" > Каталог  </Link></li>
             <li className={classes.iconn}><FontAwesomeIcon className={classes.cart} icon={faChevronRight} /></li>
             <li className={classes.cat}> Детали продукта </li>
          </nav>
        <div className={classes.frameone}></div>
        <div className={classes.picone}>
                <img src={cap1.image} alt = 'first' width='483px' height='322px;'/>
        </div>
        <div className={classes.frametwo}></div>
        <div className={classes.pictwo}>
                <img src={second} alt = 'second' width='127px' height='103px;'/>
        </div>
        <div className={classes.framethree}></div>
        <div className={classes.picthree}>
                <img src={third} alt = 'third' width='126px' height='101px;'/>
        </div>
        <div className={classes.framefour}></div>
        <div className={classes.picfour}>
                <img src={fourth} alt = 'fourth' width='128px' height='103px;'/>
        </div>

        <div className={classes.main}>
            <h5 className={classes.title}>{cap1.name}</h5>
            <p className={classes.text}>{cap1.description}</p>
        </div> 
        <div className={classes.sizes}>
        {cap1.size.map(function(elem)
        {
            return <button onClick={() => setSizeButton(elem)} key={elem} className={classes.sizes_block + " " + (size === elem ? classes.selected : '')}>{sizeDict[elem]}</button>;
        })}
        </div>
        <div className={classes.frame5}></div>
            <button onClick={minusCount} className={classes.text5}> - </button>
            <p className={classes.text6}> {counter} </p>
            <button onClick={plusCount} className={classes.text7}> + </button>
        <p className={classes.text8}> {cap1.price}сом </p>
        <button className={classes.text9}> Добавить в корзину </button></div>)
    }
    else
    {
        return(<p>Ошибка</p>)
    }
};
const CurrentCapContainer = ({caps, loading, error, fetchCap}) => {
const service = useContext(CapsContext);
let {id} = useParams();
id = parseInt(id);
useEffect(() => 
{
    fetchCap(service.getCap,id)
}, [service.getCap]);

 if(loading) {
      return <Spinner animation="border" />;
 }

 if (error) {
    return <p>Ошибка</p>
 }

return <ProductMap cap={caps} />
};
 
  const mapStateToProps = ({caps, error, loading}) => {
      return {
          caps,
          error, 
          loading
      };
  };
  
  const mapDispatchToProps = (dispatch,id) => 
  {
    return{
      fetchCap: (service,id) => fetchCap(dispatch, service,id)
    }
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps) (CurrentCapContainer);