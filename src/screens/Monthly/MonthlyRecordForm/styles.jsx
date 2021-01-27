import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Monthly Record Input

export const Container = styled.div`
  width: 100%;
`;
export const TextColumn = styled.div`
  font-family: "Rajdhani", sans-serif;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 430px 90px;
  grid-template-rows: 25px;
  border: 1px solid grey;
`;
export const Column = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px 430px 95px 43px;
  grid-template-rows: 30px;
  border: 1px solid grey;
  border-top: none;
`;
export const Date = styled.div`
  font-family: "Rajdhani", sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  padding-left: 5px;
`;

export const TableName = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;

  &:nth-child(2) {
    border-right: 1px solid grey;
    border-left: 1px solid grey;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

export const Form = styled.div`
  border-right: 1px solid grey;
  border-left: 1px solid grey;
  padding: 5px;
`;

export const AddBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  transform: translateX(10px) translateY(5px);
  font-size: 20px;
  color: #a5a3a3;

  &:hover {
    color: #30475e;
    opacity: 0.7;
  }
`;

// Add Monthly Content

export const DeleteBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  color: #9b3333;
  height: 20px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-size: 15px;
  &:nth-child(2) {
    transform: translateX(-10px);
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 250px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 20px;
  gap: 5px;
  overflow-x: hidden;
  overflow-y: auto;
`;
export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 500px 90px 20px;
  grid-template-rows: 20px;
  gap: 20px;
`;
export const ContentText = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const DelBtn = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #525151;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    color: #3f3d3d;
    opacity: 1;
  }
`;
export const TimeMark = styled.div`
  width: 16px;
  margin-right: 2px;

  &:nth-child(2) {
    width: 4px;
  }
  &:nth-child(3) {
    width: 16px;
    display: flex;
    justify-content: flex-end;
  }
`;

// Add Monthly Time
export const TimeSection = styled.section`
  display: flex;
  width: 90px;
  padding: 5px;
  justify-content: space-between;
`;
export const TimeSelect = styled.select`
  width: 40px;
  font-family: "Rajdhani", sans-serif;
`;
export const Option = styled.option`
  background-color: #525151;
  color: white;
  font-family: "Rajdhani", sans-serif;
`;
