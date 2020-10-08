import React from "react";
import styled from "styled-components";

const List = styled.li`
  width: 100%;
  height: 70px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Life Savers", cursive;
  background-color: #30475e;
  color: white;
`;

const Title = styled.div``;

const MonthlyList = (monthlyProps) => {
  const { date } = monthlyProps;
  return (
    <List>
      <Title>{date}</Title>
    </List>
  );
};

export default MonthlyList;
