import React from "react";

const Button = ({ type, text, classes, onClick }) => {
  return (
    <button type={type} className={classes}>
      {text}
    </button>
  );
};

export default Button;
