import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// SIGN UP
const FadeIn = keyframes`
 from {
   opacity:0
 }
 to{
  opacity:1
 }
`;

export const Section = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 20px;
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-family: Malgun Gothic, dotum, gulim, sans-serif;
  border-bottom: 1px solid #dfdede;
  padding: 5px 0;
`;

export const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  padding: 20px;
  display: grid;
  place-items: center;
  animation: ${FadeIn} 1s linear;
`;

export const Column = styled.div`
  display: flex;
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

export const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;
export const Error = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  color: red;
  transform: translateX(15px) translateY(-20px);
`;

// SIGN-UP SUCCESS
export const Text = styled.div`
  font-size: 18px;
  font-family: "Life Savers", cursive;
  margin-top: 20px;
`;

export const Question = styled.div`
  font-size: 15px;
  margin: 20px 0;
`;

// SIGN UP INPUT

export const Form = styled.div`
  height: 60px;
  width: 100%;
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 105px 400px;
  gap: 10px;
  transform: translateX(20px);
`;
export const Label = styled.label`
  font-size: 13px;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const EmailForm = styled.div`
  display: grid;
  grid-template-columns: 200px 20px 180px;
  place-items: center;
`;

export const Select = styled.select`
  height: 37px;
  width: 100%;
  opacity: 0.7;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #dfdede")};
`;
export const Option = styled.option``;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #dfdede")};
  opacity: 0.7;

  &:focus {
    border: ${(props) =>
      props.error ? "1px solid red" : "1px solid  #30475e"};
  }
`;

export const Info = styled.div`
  font-size: 11px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translateX(15px) translateY(-20px);
`;
