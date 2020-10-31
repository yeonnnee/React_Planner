import React from "react";
import Loader from "../../../components/Loader";
// import styled from "styled-components";

import {
  Container,
  List,
  Title,
  Section,
  Header,
  Wrapper,
  Scroll,
  Detail,
  Desc,
  BtnSection,
  EditLink,
  Btn,
} from "./styles";

const MonthlyDetailPresenter = (monthlyProps) => {
  const { state, onConfirm } = monthlyProps;
  const date = new Date(state.detail.date);
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  let planDate = date.getDate();
  if (planDate < 10) {
    planDate = "0" + planDate;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return (
    <Container>
      {state.isLoading ? (
        <Loader />
      ) : (
        <>
          <List tabIndex="0">
            <Title>SCHEDULE</Title>
          </List>
          <Section>
            <Detail>
              <Header>
                <Title>Description</Title>
                <Title>
                  {month}-{planDate}-{year}
                </Title>
              </Header>
              <Wrapper
                scroll={state.detail.contents.length >= 19 ? true : false}
              >
                <Scroll
                  scroll={state.detail.contents.length >= 19 ? true : false}
                >
                  {state.detail.contents.map((content, index) => {
                    return <Desc key={index}>{content.text}</Desc>;
                  })}
                </Scroll>
              </Wrapper>
            </Detail>

            <BtnSection>
              <EditLink to={`edit/${state.detail.id}`}>
                <Btn>Edit</Btn>
              </EditLink>
              <Btn onClick={onConfirm} id={state.detail.date}>
                Delete
              </Btn>
            </BtnSection>
          </Section>
        </>
      )}
    </Container>
  );
};

export default MonthlyDetailPresenter;
