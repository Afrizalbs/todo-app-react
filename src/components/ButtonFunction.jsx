import React from "react";

const ButtonFunction = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonFunction;
