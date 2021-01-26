import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #382933;
`;
export const Title = styled.div`
  font-family: "Cinzel Decorative", cursive;
  font-size: 25px;
`;
export const Describe = styled.div`
  font-size: 13px;
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
  display: flex;
`;
