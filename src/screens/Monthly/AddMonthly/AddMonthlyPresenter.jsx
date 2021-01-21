import React from "react";

import AddMonthlyInput from "./AddMonthlyInputContainer";
import Header from "../../../components/Header";
import AddMonthlyContent from "./AddMonthlyContent";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Button, Section, Wrapper, ListSection } from "./AddMonthly.styles";

const AddMonthlyPresenter = (monthlyProps) => {
  const {
    onChange,
    onSubmit,
    save,
    cancel,
    planList,
    planDate,
    content,
    deleteListItem,
    selectTime,
  } = monthlyProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            <AddMonthlyInput
              onChange={onChange}
              onSubmit={onSubmit}
              content={content.text}
              error={content.error}
              planDate={planDate}
            />
            <ListSection>
              <AddMonthlyContent
                contents={planList.contents}
                selectTime={selectTime}
                deleteListItem={deleteListItem}
              />
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
