import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import classes from "./Register.module.css";
import {
  maxLength,
  maxLengthMessage,
  minLength,
  minLengthMessage,
  requiredMessage,
} from "../../errors/inputErrors/inputError";

const Register = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {
    return;
  };

  const emailInput = (
    <div className={`${classes["input-component"]}`}>
      <label htmlFor="email">ایمیل:</label>
      <div>
        <i className="fa fa-envelope-o"></i>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: requiredMessage,
            minLength: minLength({ value: 3, message: minLengthMessage(3) }),
            maxLength: maxLength({ value: 30, message: maxLengthMessage(30) }),
          })}
        />
      </div>
      {errors.email && (
        <p
          className={`${classes.error} ${theme === "DARK" ? "dark" : "light"}`}
        >
          <span>خطا:</span>
          {errors.email.message}
        </p>
      )}
    </div>
  );

  const passwordInput = (
    <div className={`${classes["input-component"]}`}>
      <label htmlFor="password"> پسورد: </label>
      <div>
        <i className="fa fa-expeditedssl"></i>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: requiredMessage,
            minLength: minLength({ value: 3, message: minLengthMessage(3) }),
            maxLength: maxLength({ value: 20, message: maxLengthMessage(20) }),
          })}
        />
        {!errors.email && errors.password && (
          <p
            className={`${classes.error} ${
              theme === "DARK" ? "dark" : "light"
            }`}
          >
            {errors.password.message}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={`${classes["register-component"]} ${
        theme === "DARK" ? "component-dark" : "component-light"
      } ${theme === "DARK" ? classes.dark : classes.light} `}
    >
      <p className={classes.title}>
        <i className="fa fa-pencil"></i>
        ایجاد اکانت
      </p>

      {emailInput}
      {passwordInput}

      <input type="submit" value="وارد شدن" className={classes.btn} />
      <Link to="/" className={classes["forgot-password"]}>
        رمز خود را فراموش کردید؟
      </Link>
    </form>
  );
};

export default Register;

/*   const rePasswordInput = (
    <div className={`${classes.rePassword} ${classes["input-component"]}`}>
      <label htmlFor="rePassword">تکرار پسورد: </label>
      <div>
        <i className="fa fa-expeditedssl"></i>
        <input
          id="rePassword"
          type="password"
          {...register("rePassword", {
            required: requiredMessage,
            minLength: minLength({ value: 3, message: minLengthMessage(3) }),
            maxLength: maxLength({ value: 20, message: maxLengthMessage(20) }),
          })}
        />
      </div>
      {!errors.email && !errors.password && errors.rePassword && (
        <p
          className={`${classes.error} ${theme === "DARK" ? "dark" : "light"}`}
        >
          {errors.rePassword.message}
        </p>
      )}
    </div>

          <label htmlFor="rule-check" className={classes.rule}>
        با قوانین موافقم <input id="rule-check" type="checkbox" />
      </label>
  ); */
