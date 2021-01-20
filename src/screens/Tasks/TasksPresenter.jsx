import React from "react";

import TaskList from "./TaskList";
import TasksInput from "./TasksInput";
import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";

import { Content, Title, Section, Column } from "./styles";

const TasksPresenter = (tasksProps) => {
  const { state, onChange, onSubmit, tasks } = tasksProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Content>
            <TasksInput
              onChange={onChange}
              onSubmit={onSubmit}
              content={tasks.content}
              error={tasks.error}
            />
            <Section>
              <Column>
                <Title>PENDING</Title>
                <TaskList tasks={state.pendingList} />
              </Column>
              <Column>
                <Title>FINISHED</Title>
                <TaskList tasks={state.finishedList} />
              </Column>
            </Section>
          </Content>
        </Main>
      </Frame>
    </Container>
  );
};

export default TasksPresenter;
