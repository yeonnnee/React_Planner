import React from "react";

import AddMonthlyInput from "./AddMonthlyInputContainer";
import Header from "../../../components/Header";
import AddMonthlyContentList from "./AddMonthlyContent";
import DeleteConfirmModal from "../../../components/Modal/DeleteConfirmModal";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import {
  Button,
  Section,
  Wrapper,
  ListSection,
  DeleteBtn,
} from "./AddMonthly.styles";

const AddMonthlyPresenter = (monthlyProps) => {
  const {
    onChange,
    onSubmit,
    save,
    cancel,
    planList,
    selectedDate,
    content,
    deleteListItem,
    selectTime,
    location,
    deleteMonthly,
    modalStatus,
    confirmDelete,
  } = monthlyProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            {location.pathname.includes("edit") ? (
              <DeleteBtn onClick={confirmDelete}>삭제하기</DeleteBtn>
            ) : null}

            {modalStatus !== "hidden" && location.pathname.includes("edit") ? (
              <DeleteConfirmModal
                confirmDelete={deleteMonthly}
                cancelDelete={cancel}
              />
            ) : null}

            <AddMonthlyInput
              onChange={onChange}
              onSubmit={onSubmit}
              selectTime={selectTime}
              text={content.text}
              error={content.error}
              selectedDate={selectedDate}
            />

            <ListSection>
              <AddMonthlyContentList
                contents={planList.contents}
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
