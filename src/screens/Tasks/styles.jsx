import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Tasks

export const Content = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 20px;
  font-family: "Fredericka the Great", cursive;
`;
export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px, 1fr;
  place-items: center;
`;
export const Column = styled.div``;

// Tasks List

export const Wrapper = styled.div`
  width: 340px;
  overflow: hidden;
  border: 1px solid #585858;
`;

export const Scroll = styled.div`
  width: 355px;
`;

export const List = styled.ul`
  height: 445px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

// Task List Content

export const ListItem = styled.li`
  padding: 5px;
  display: grid;
  grid-template-columns: 20px 260px 30px;
  font-size: 15px;
  line-height: 1.3;
  place-items: center;
  gap: 10px;
`;

export const CheckBox = styled(FontAwesomeIcon)`
  width: 15px;
  height: 15px;
  color: #5a2330;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    color: #5a2330;
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const DelBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #5a2330;
  }
`;
