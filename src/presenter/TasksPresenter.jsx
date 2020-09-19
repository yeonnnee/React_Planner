/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

import TaskList from "../container/Tasks/TaskList";
import TasksInput from "../container/Tasks/TasksInput";

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
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Scroll = styled.div`
  width: 248px;
`;
const Wrapper = styled.div`
  width: 230px;
  overflow: hidden;
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
            <Wrapper>
              <Scroll>
                <List>
                  {state.pendingList.map((task, index) => {
                    return <TaskList {...task} key={index} />;
                  })}
                </List>
              </Scroll>
            </Wrapper>
          </Pending>
          <Finished>
            <Title>FINISHED</Title>
            <Wrapper>
              <Scroll>
                <List>
                  {state.finishedList.map((task, index) => {
                    return <TaskList {...task} key={index} />;
                  })}
                </List>
              </Scroll>
            </Wrapper>
          </Finished>
        </ListCon>
      </Container>
    </>
  );
};

export default TasksPresenter;
