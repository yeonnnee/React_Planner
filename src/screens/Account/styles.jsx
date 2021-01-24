import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  width: 100%;
  height: 370px;
  padding: 10px;
  transform: translateY(150px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountLink = styled(Link)`
  text-decoration: none;
  width: 90%;
`;
export const DropDownList = styled.button`
  width: 100%;
  height: 50px;
  border-top: 1px solid #baa7a1;
  border-bottom: none;
  border-left: none;
  border-right: none;
  background: none;
  outline: none;

  &:hover {
    background-color: #efefef;
  }
`;

export const LogOutBtn = styled.button`
  width: 90%;
  height: 50px;
  outline: none;
  border-top: 1px solid #baa7a1;
  border-bottom: 1px solid #baa7a1;
  border-left: none;
  border-right: none;
  background: none;

  &:hover {
    background-color: #efefef;
  }
`;
