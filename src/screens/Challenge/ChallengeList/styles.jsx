import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
  text-decoration: none;
  color: rgb(65, 25, 25);
  transform: translateX(20px);
`;

export const ListItem = styled.li`
  width: 430px;
  height: 80px;
  padding: 10px;
  display: grid;
  grid-template-columns: 30px 200px 150px 30px;
  transform: translateX(-30px);
  font-family: "Jaldi", sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
  border: 1px solid #5e3030;
  box-shadow: 3px 3px 5px #6d4848, 0 0 3px #4d2727;
  cursor: pointer;
`;
export const Category = styled.div`
  width: 80px;
  height: 20px;
  display: grid;
  place-items: center;
  transform: rotate(270deg) translateX(-19px) translateY(-40px);
  font-family: "Rajdhani", sans-serif;
  font-size: 13px;
  letter-spacing: 1.5px;
  background-color: #6b4343;
  font-weight: bold;
  color: white;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: rgb(182, 29, 29);
  cursor: pointer;
`;
export const Column = styled.div`
  display: grid;
  place-items: center;

  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
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
`;
