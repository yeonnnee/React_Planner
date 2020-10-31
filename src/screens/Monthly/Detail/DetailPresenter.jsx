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
  return (
    <Container>
      {state.isLoading ? (
        <Loader />
      ) : (
        <>
          <List tabIndex="0">
            <Title>{state.detail.date.substring(0, 10)}</Title>
          </List>
          <Section>
            <Detail>
              <Header>Description</Header>
              <Wrapper>
                <Scroll>
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
