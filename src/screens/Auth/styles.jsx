import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PasswordLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  margin-top: 7px;
  align-self: flex-end;
  padding-right: 54px;
  color: rgb(119, 25, 25);

  @media only screen and (max-width: 640px) {
    position: relative;
    right: -15px;
  }
`;
export const SignUpLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  margin-top: 7px;
  color: rgb(119, 25, 25);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  height: 200px;
`;
export const Icon = styled(FontAwesomeIcon)`
  color: #cfd5dd;
`;
export const Label = styled.label``;
export const Input = styled.input`
  width: 80%;
  margin-left: 10px;
  padding: 7px 5px;
  border-radius: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #cfd5dd;

  &:focus {
    border-bottom: 1px solid #487eb0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  background-color: #30475e;
  color: white;
  cursor: pointer;
`;
