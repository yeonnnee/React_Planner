import React from "react";

import TasksInput from "../Tasks/TasksInput";
import {
  Container,
  ListCon,
  Date,
  Button,
  List,
  DelBtn,
  Section,
} from "./styles";

const AddMonthlyPresenter = (monthlyProps) => {
  const {
    onChange,
    onSubmit,
    save,
    date,
    cancel,
    planList,
    content,
    deleteItem,
  } = monthlyProps;

  return (
    <Container>
      <Date>{date.substring(0, 10)}</Date>
      <TasksInput
        onChange={onChange}
        onSubmit={onSubmit}
        content={content.text}
        error={content.error}
      />
      <ListCon>
        {planList.contents.map((content, index) => (
          <List key={index} id={content.id}>
            {content.text}
            <DelBtn onClick={deleteItem}>X</DelBtn>
          </List>
        ))}
      </ListCon>
      <Section>
        <Button onClick={save}>Save</Button>
        <Button onClick={cancel}>Cancel</Button>
      </Section>
    </Container>
  );
};

export default AddMonthlyPresenter;
