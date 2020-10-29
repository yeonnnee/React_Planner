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
  const { state, onChange, onSubmit, tasks } = tasksProps;
  return (
    <>
      <Header>TO DO LIST</Header>
      <Container>
        <TasksInput
          onChange={onChange}
          onSubmit={onSubmit}
          content={tasks.content}
          error={tasks.error}
        />
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
