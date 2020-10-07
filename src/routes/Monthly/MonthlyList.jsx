import React from "react";
import styled from "styled-components";

const List = styled.li`
  width: 80%;
  height: 70px;
  border: 1px solid #30475e;
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
