import React from "react";
import styled from "styled-components";

import TaskList from "./TaskList";
import TasksInput from "./TasksInput";

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
const TasksPresenter = (tasksProps) => {
  const {
    pendingList,
    finishedList,
    onChange,
    onSubmit,
    content,
    error,
  } = tasksProps;
  return (
    <>
      <Header>TO DO LIST</Header>
      <Container>
        <TasksInput
          onChange={onChange}
          onSubmit={onSubmit}
          content={content}
          error={error}
        />
        <ListCon>
          <Pending>
            <Title>PENDING</Title>
            <Wrapper>
              <Scroll>
                <List>
                  {pendingList.map((task, index) => {
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
                  {finishedList.map((task, index) => {
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
