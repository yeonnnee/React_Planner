import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
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

const Detail = styled.ul`
`;
const Desc = styled.li``;


const MonthlyList = (monthlyProps) => {
  const { date, contents} = monthlyProps;

  return (
    <Container>
      <List>
        <Title>{date}</Title>
      </List>
      <Detail>
        {contents.map((content, index) => {
          return<Desc key={index}>{content.text}</Desc>
        })}
      </Detail>
    </Container>
  );
};

export default MonthlyList;
