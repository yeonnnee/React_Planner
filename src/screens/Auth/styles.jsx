import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PasswordLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  margin-top: 7px;
  align-self: flex-end;
  padding-right: 54px;
  color: rgb(148, 30, 30);
`;
export const SignUpLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  margin-top: 7px;
  color: #391b1b;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 200px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
  &:focus {
    border: 1px solid #baa7a1;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  margin-top: 100px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #30475e;
  outline: none;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
