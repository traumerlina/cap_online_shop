import React from "react";
import classes from "./styles.module.css";

const LoaderIndicator = () => {
  return (
    <div className={classes.loader}>
      <div className={`${classes.inner} ${classes.one}`}></div>
      <div className={`${classes.inner} ${classes.two}`}></div>
      <div className={`${classes.inner} ${classes.three}`}></div>
      <div className={classes.text}> L o a d i n g ...</div>
    </div>
    
  );
};

export default LoaderIndicator;


