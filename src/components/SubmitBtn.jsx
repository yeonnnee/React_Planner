import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Button = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fredericka the Great", cursive;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
const SubmitBtn = withRouter(({ location }) => {
  return (
    <Button>{location.pathname === "/logIn" ? "Log In" : "Sign Up"}</Button>
  );
});

export default SubmitBtn;
