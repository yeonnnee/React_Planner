/* eslint-disable react/prop-types */
import React, { useState } from "react";

import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TasksInput from "../../components/TasksInput";

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

const MonthlyAdd = ({ date }) => {
  const [plans, setPlans] = useState({
    id: "",
    date: "",
    content: [],
  });
  const [state, setState] = useState({ monthly: [] });
  const [content, setContent] = useState({
    id: "",
    text: "",
    error: "",
  });

  function onChange(event) {
    const value = event.target.value;
    setContent({ id: uuidv4().toString(), text: value, error: "" });
  }
  function save() {
    const date = new Date();
    const today = date.toString().substring(0, 10);
    setPlans({
      id: uuidv4().toString(),
      date: today,
      content: [...plans.content, ...state.monthly],
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    setState({ monthly: [...state.monthly, content] });
    setContent({
      text: "",
      error: "",
    });
  }
  function deleteItem() {
    console.log("plans", plans);
    console.log("state", state.monthly);
  }
  return (
    <Container>
      <h2>{date}</h2>
      <TasksInput
        onChange={onChange}
        onSubmit={onSubmit}
        content={content.text}
        error={content.error}
      />
      <ListCon>
        {state.monthly.map((content, index) => (
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

export default MonthlyAdd;
