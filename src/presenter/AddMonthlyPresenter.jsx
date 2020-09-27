/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import TasksInput from "../components/TasksInput";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin: 5px 23px;
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
const ListCon = styled.ul`
  width: 90%;
  margin: 10px 0;
  border: 1px solid #30475e;
  height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const List = styled.li`
  width: 100%;
  margin: 10px;
`;
const DelBtn = styled.button`
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

const AddMonthlyPresenter = ({
  onChange,
  onSubmit,
  save,
  deleteItem,
  plans,
  content,
}) => {
  return (
    <Container>
      <h2></h2>
      <TasksInput
        onChange={onChange}
        onSubmit={onSubmit}
        content={content.text}
        error={content.error}
      />
      <ListCon>
        {plans.monthly.map((content, index) => (
          <List key={index}>
            {content.text}
            <DelBtn onClick={deleteItem}>X</DelBtn>
          </List>
        ))}
      </ListCon>
      <Button onClick={save}>Save</Button>
    </Container>
  );
};

export default AddMonthlyPresenter;
