import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-top: 30px;
`;

export const Date = styled.div`
  font-family: "Rajdhani", sans-serif;
  height: 30px;
  font-weight: bold;
`;

export const Section = styled.div`
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 5px;
  outline: none;
  border: 1px solid #30475e;
  background: none;
  cursor: pointer;
  font-family: "Rajdhani", sans-serif;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

export const ListSection = styled.section`
  width: 100%;
  margin: 20px 0;
  padding: 10px 20px 0 20px;
  background-color: #e8e8e8;
`;

// Add Monthly Content
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

export const TimeSection = styled.section`
  display: flex;
  width: 90px;
  justify-content: space-around;
`;
export const TimeSeclect = styled.select`
  width: 40px;
`;
export const Option = styled.option`
  background-color: #525151;
  color: white;
`;
