import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";

import classes from "./Header.module.css";

const Header = () => {
  const context = useContext(ThemeContext);
  const { theme, themeChangeHandler } = context;

  const location = useLocation();

  return (
    <header
      className={`${classes["top-nav"]} ${
        theme === "DARK" ? classes.dark : classes.light
      }`}
    >
      <ul>
        <div className={classes.pages}>
          <span>
            <i className="fa fa-bars"></i>
          </span>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/shoes">مردانه</Link>
          </li>
          <li>
            <a href="">زنانه</a>
          </li>
        </div>
        <div className={classes.space}></div>
        <div className={classes["register-login"]}>
          <div className={classes.cart}>
            <i className="fa fa-shopping-cart"></i>
            <span>
              تعداد خرید <span className={classes.badge}>۳</span>
            </span>
          </div>
          {location.pathname !== "/register" && (
            <li>
              <Link to="/register">ثبت نام</Link>
            </li>
          )}
          {location.pathname !== "/login" && (
            <li>
              <Link to="/login">ورود</Link>
            </li>
          )}
          <div className={classes["theme-changer"]}>
            <i
              className={`fa ${theme === "DARK" ? "fa-sun-o" : "fa-moon-o"}`}
              onClick={themeChangeHandler}
            ></i>
          </div>
        </div>
      </ul>
    </header>
  );
};

export default Header;
