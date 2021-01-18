import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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
