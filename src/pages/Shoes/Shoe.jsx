import React, { useState } from "react";

import classes from "./Shoe.module.css";
import shoe1 from "../../asset/img/shoe1.png";

const Shoe = ({ name, urlImage, price }) => {
  const [like, setLike] = useState(0);
  const likeHandler = () => {
    setLike((prevLike) => ++prevLike);
  };
  return (
    <>
      <section className={classes["shoe"]}>
        {/* <img src={shoees} alt="" /> */}
        <img src={shoe1} alt={name} />
        <div className={classes["shoe-content"]}>
          <div className={classes["shoe-content__title"]}>
            <p className={classes["shoe-content__name"]}>نام: {name}</p>
            <p>قیمت: {price}</p>
          </div>
          <div className={classes["shoe-content__like"]}>
            <button className={classes.btn}>خرید</button>
            <div className={classes["like-content"]}>
              <i
                className={`fa ${like > 0 ? "fa-heart" : "fa-heart-o"} ${
                  classes.like
                }`}
                onClick={likeHandler}
              ></i>
              <span>{like > 0 && like}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shoe;
