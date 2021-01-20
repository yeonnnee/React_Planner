import React from "react";

import TasksInput from "../../Tasks/TasksInput";
import Header from "../../../components/Header";
import AddMonthlyContent from "./AddMonthlyContent";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import {
  Date,
  Button,
  Section,
  Wrapper,
  ListSection,
} from "./AddMonthly.styles";

const AddMonthlyPresenter = (monthlyProps) => {
  const {
    onChange,
    onSubmit,
    save,
    cancel,
    planList,
    content,
    planDate,
  } = monthlyProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            <Date>{planDate}</Date>
            <TasksInput
              onChange={onChange}
              onSubmit={onSubmit}
              content={content.text}
              error={content.error}
            />
            <ListSection>
              <AddMonthlyContent contents={planList.contents} />
            </ListSection>
            <Section>
              <Button onClick={save}>Save</Button>
              <Button onClick={cancel}>Cancel</Button>
            </Section>
          </Wrapper>
        </Main>
      </Frame>
    </Container>
  );
};

export default AddMonthlyPresenter;
