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
  const { state, onConfirm, onEdit } = monthlyProps;
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
              <EditLink to={`monthly/edit/${state.detail.id}`}>
                <Btn onClick={onEdit} id={state.detail.id}>
                  Edit
                </Btn>
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
