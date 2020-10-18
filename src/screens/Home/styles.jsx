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
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: ${FadeIn} 1s linear;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
