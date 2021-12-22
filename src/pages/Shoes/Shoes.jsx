import React, { useContext } from "react";

import classes from "./Shoes.module.css";
import Shoe from "./Shoe";
import { useLocation } from "react-router";
import { ThemeContext } from "../../context/ThemeProvider";

const SHOES_ARRAY = [
  { name: "nike", price: 100, url: "../../asset/img/shoe1.jpg" },
  { name: "nike", price: 100, url: "../../asset/img/shoe1.jpg" },
  { name: "nike", price: 100, url: "../../asset/img/shoe1.jpg" },
];

const Shoes = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <div
      className={`${classes["shoes-component"]} ${
        theme === "DARK" ? "component-dark" : "component-light"
      } ${theme === "DARK" ? "dark" : "light"}`}
    >
      <div className={classes.title}>بخش کفش ها</div>
      <div className={classes["shoes-list"]}>
        {SHOES_ARRAY.map((shoe) => (
          <Shoe name={shoe.name} price={shoe.price} url={shoe.url} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
