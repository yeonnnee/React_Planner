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

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 640px) {
    height: 95%;
    position: relative;
    top: -20px;
  }
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: "Cinzel Decorative", cursive;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  margin: 20px;
  height: 300px;
  width: 100%;
  animation: ${FadeIn} 1s linear;
  @media only screen and (max-width: 640px) {
    margin-top: 0;
  }
`;
export const Section = styled.div`
  display: flex;
  font-family: "Life Savers", cursive;
  @media only screen and (max-width: 640px) {
    height: 40px;
    margin-top: 75px;
  }
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
  @media only screen and (max-width: 640px) {
    width: 100px;
    height: 30px;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;
export const Error = styled.span`
  position: relative;
  top: -12px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: red;
  line-height: 1.5;
  @media only screen and (max-width: 640px) {
    top: -8px;
  }
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
  margin: 5px 30px;
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 105px 400px;
  gap: 10px;
  @media only screen and (max-width: 640px) {
    margin: 0 0 7px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
  }
`;
export const Label = styled.label`
  font-size: 13px;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 640px) {
    width: 80%;
    justify-content: flex-start;
    height: 20px;
  }
`;
export const Input = styled.input`
  width: 60%;
  padding: 10px 20px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "none")};
  border-radius: 5px;
  &:focus {
    border: ${(props) => (props.error ? "1px solid red" : "2px solid #20639b")};
  }
  @media only screen and (max-width: 640px) {
    width: 80%;
    padding: 13px 20px;
  }
`;

export const Info = styled.div`
  width: 60%;
  margin: 0 31%;
  font-size: 11px;
  display: flex;
  line-height: 1.5;
  align-items: center;
  position: relative;
  top: -18px;
  @media only screen and (max-width: 640px) {
    width: 80%;
    top: -13px;
    margin-left: 40px;
  }
`;
