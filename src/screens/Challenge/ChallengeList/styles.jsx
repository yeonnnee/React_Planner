import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ListItem = styled.li`
  width: 400px;
  height: 60px;
  font-family: "Jaldi", sans-serif;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 13px;
  margin-bottom: 10px;
  background-color: #f5f0f0;
  box-shadow: 5px 5px 15px #c9c4c2, 5px 5px 10px #c9c4c2,
    inset -1px -1px 5px #baa7a1;
  &:hover {
    background-color: #e9e3e3;
  }
  @media only screen and (max-width: 640px) {
    width: 300px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: rgb(182, 29, 29);
  cursor: pointer;
`;
export const Column = styled.div`
  margin: 0 20px;
`;
export const Status = styled.span`
  font-size: 11px;
  opacity: 0.6;
`;

export const Title = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const Percentage = styled.div`
  font-size: 11px;
  opacity: 0.6;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid grey;
`;
export const Name = styled.div`
  font-size: 10px;
  opacity: 0.6;
  margin-right: 5px;
`;
export const Achieve = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: -20px;
`;
export const SLink = styled(Link)`
  text-decoration: none;
  color: rgb(65, 25, 25);
`;
