import React from "react";
import Button from "@mui/material/Button";

const ButtonFunction = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      size="small"
      style={{ "margin-left": 10 }}
    >
      {text}
    </Button>
  );
};

export default ButtonFunction;
