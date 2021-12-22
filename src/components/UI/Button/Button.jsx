import React from "react";

import "./Button.css";

const Button = ({ className, onClick, children }) => {
  const classes = `btn ${className}`;
  return <button className={classes}>{children}</button>;
};

export default Button;
