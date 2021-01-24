import React from "react";
import styled from "styled-components";

export const Btn = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 10px;
  background-color: #30475e;
  color: white;
  border: 1px solid white;
  opacity: 0.8;
  outline: none;

  &:nth-child(2) {
    background-color: transparent;
    color: #30475e;
    border: 1px solid #30475e;
    &:hover {
      background-color: transparent;
      color: #30475e;
      border: 1px solid #30475e;
      box-shadow: 2px 2px 5px #3e5368, 0 0 2px #30475e;
    }
  }

  &:hover {
    background-color: #30475e;
    border: 1px solid #30475e;
    box-shadow: 2px 2px 5px #3e5368, 0 0 2px #30475e;
  }
`;

const Button = (buttonProps) => {
  const { onClick, text } = buttonProps;

  return (
    <>{onClick ? <Btn onClick={onClick}>{text}</Btn> : <Btn>{text}</Btn>}</>
  );
};

export default Button;
