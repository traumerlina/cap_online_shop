import React,{useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { sliderProducts } from '../../actions/productActions';
import classes from "./style.module.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";




const SliderPart = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products)
  useEffect(() => {
      dispatch(sliderProducts());
  }, [dispatch]);

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  };

  return (
    <div
      className={classes.BootstrapMulti}
      style={{ display: "flex", justifyContent: "center", marginTop: 1100 }}
    >
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={3}
          slidesToScroll={3}
          dots
        >
          {products.map((item,i) => (
            <Card key={i} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: 20,
        padding: "0 10px",
        width: 220,
        boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
        borderRadius: 5,
      }}
    >
      <img
        className="multi__image"
        src={item.image}
        alt=""
        style={{
          width: "100%",
          height: "120px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          fontSize: "18px",
          padding: "5px 0",
          color: "red",
          fontWeight: 600,
        }}
      >
        {item.description}
      </p>
      <p
        style={{
          fontSize: "18px",
          padding: "5px 0",
          color: "black",
          fontWeight: 400,
        }}
      >
        {item.name}
      </p>
      
      <p>
        <span style={{ color: "gray", fontWeight: 700 }}>{item.price} сом</span>
      </p>

    </div>
    
    
  )
}

export default SliderPart