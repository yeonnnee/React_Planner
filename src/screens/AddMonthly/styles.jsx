import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Date = styled.div`
  font-family: "Life Savers", cursive;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 5px;
  outline: none;
  border: 1px solid #30475e;
  background: none;
  cursor: pointer;
  font-family: "Life Savers", cursive;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
export const ListCon = styled.ul`
  width: 90%;
  margin: 10px 0;
  border: 1px solid #30475e;
  height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const List = styled.li`
  width: 100%;
  margin: 10px;
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
export const Section = styled.div`
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
