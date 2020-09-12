/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import TaskList from "../components/TaskList";
import TasksInput from "../components/TasksInput";

const Container = styled.div``;

const Header = styled.div`
  display: felx;
  justify-content: center;
  position: relative;
  top: -20px;
  font-family: "Fredericka the Great", cursive;
`;
const ListCon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px, 1fr;
  gap: 10px;
`;
const Pending = styled.div``;
const Finished = styled.div``;
const Title = styled.span`
  display: flex;
  justify-content: center;
  margin: 20px;
  font-family: "Fredericka the Great", cursive;
`;
const List = styled.ul`
  height: 350px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const TasksPresenter = (state) => {
  return (
    <>
      <Header>TO DO LIST</Header>
      <Container>
        <TasksInput />
        <ListCon>
          <Pending>
            <Title>PENDING</Title>
            <List>
              {state.pendingList.map((task, index) => {
                return <TaskList {...task} key={index} />;
              })}
            </List>
          </Pending>
          <Finished>
            <Title>FINISHED</Title>
            <List>
              {state.finishedList.map((task, index) => {
                return <TaskList {...task} key={index} />;
              })}
            </List>
          </Finished>
        </ListCon>
      </Container>
    </>
  );
};

export default TasksPresenter;
