import React from "react";

import Loader from "../../../components/Loader";
import TasksInput from "../../Tasks/TasksInput";
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
    cancel,
    planList,
    content,
    deleteItem,
    isLoading,
  } = monthlyProps;

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Date>{planList.date}</Date>
          <TasksInput
            onChange={onChange}
            onSubmit={onSubmit}
            content={content.text}
            error={content.error}
          />
          <ListCon>
            {planList.contents.map((planListContent, index) => (
              <List key={index} id={planListContent.id}>
                {planListContent.text}
                <DelBtn onClick={deleteItem}>X</DelBtn>
              </List>
            ))}
          </ListCon>
          <Section>
            <Button onClick={save}>Save</Button>
            <Button onClick={cancel}>Cancel</Button>
          </Section>
        </>
      )}
    </Container>
  );
};

export default AddMonthlyPresenter;
