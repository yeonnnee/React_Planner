import React from "react";

import TaskList from "./TaskList";
import TasksInput from "./TasksInput";
import {
  Container,
  Header,
  ListCon,
  Title,
  Pending,
  Finished,
  List,
  Scroll,
  Wrapper,
} from "./styles";

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
