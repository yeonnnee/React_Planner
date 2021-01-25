import React from "react";
import { Btn } from "./styles";

const Button = (buttonProps) => {
  const { onClick, text } = buttonProps;

  return (
    <>{onClick ? <Btn onClick={onClick}>{text}</Btn> : <Btn>{text}</Btn>}</>
  );
};

export default Button;
