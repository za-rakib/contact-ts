import React from "react";
import classes from "./Button.module.css";
interface IButton {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: IButton) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
