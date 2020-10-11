import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const SlideDown = keyframes`
  from {
    transform: translateY(-30px)
  } 
  to{
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  padding: 10px;
  display: none;
  &:hover {
    display: block;
  }
`;

const List = styled.li`
  width: 100%;
  height: 70px;
  border: 1px solid #30475e;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Life Savers", cursive;
  background-color: #30475e;
  color: white;
  z-index: 1;
  &:focus ~ ${Section} {
    display: block;
    animation: ${SlideDown} 0.5s linear forwards;
  }
`;

const Title = styled.div``;
const Detail = styled.ul``;
const Desc = styled.li``;
const BtnSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const EditLink = styled(Link)``;
const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #30475e;
  margin-right: 10px;
  font-family: "Life Savers", cursive;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const MonthlyList = (monthlyProps) => {
  const { date, contents, id, onDelete, onEdit } = monthlyProps;

  return (
    <Container>
      <List tabIndex="0">
        <Title>{date}</Title>
      </List>
      <Section>
        <Detail>
          {contents.map((content, index) => {
            return <Desc key={index}>{content.text}</Desc>;
          })}
        </Detail>
        <BtnSection>
          <EditLink to={`/edit`}>
            <Btn onClick={onEdit} id={id}>
              Edit
            </Btn>
          </EditLink>
          <Btn onClick={onDelete}>Delete</Btn>
        </BtnSection>
      </Section>
    </Container>
  );
};

export default MonthlyList;
