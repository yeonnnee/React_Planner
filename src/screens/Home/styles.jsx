import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const FadeIn = keyframes`
from{
  transform: translateY(-30px);
  opacity: 0;
} to{
  transform: translateY(0);
  opacity: 1;
  }
`;

export const Container = styled.div`
  width: 800px;
  height: 880px;
  background-color: #273c75;
  box-shadow: 5px 5px 15px #615a58, 5px 5px 10px #615a58;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: ${FadeIn} 1s linear;
  @media only screen and (max-width: 640px) {
    height: 95%;
    margin-top: 0;
    justify-content: center;
    position: relative;
    top: -20px;
  } */
`;

export const Template = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: #ac6e6c;
`;

export const Main = styled.div`
  width: 100%;
  height: 835px;
  transform: translateY(-44%);
  background-color: white;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 640px) {
    margin: 20px 0;
  }
`;
export const Text = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
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

export const Span = styled.span``;
