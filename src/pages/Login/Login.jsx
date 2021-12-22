import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import classes from "./Login.module.css";

const Login = () => {
  const context = useContext(ThemeContext);

  const { theme } = context;

  return (
    <form
      className={`${classes["login-component"]} ${
        theme === "DARK" ? "component-dark" : "component-light"
      }`}
    >
      <div className={classes["input-label"]}>
        <label htmlFor="username">نام کاربری: </label>
        <input
          type="text"
          id="username"
          placeholder="نام کاربری خود را وارد کنید..."
        />
        <span className={classes.border}></span>
      </div>
      <div className={classes["input-label"]}>
        <div className={classes["label-password"]}>
          <label htmlFor="password"> پسورد: </label>
          <span>
            <a href="">پسورد را فراموش کردم؟</a>
            <span className={classes.border}></span>
          </span>
        </div>
        <input
          type="password"
          id="password"
          placeholder="پسورد خود را وارد کنید..."
        />
        <span className={classes.border}></span>
      </div>

      <div className={classes.btns}>
        <button>وارد شدن</button>
        <button className={classes["no-account"]}>اکانت ندارم ://</button>
      </div>
    </form>
  );
};

export default Login;
