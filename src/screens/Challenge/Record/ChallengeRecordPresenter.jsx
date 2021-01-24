import React from "react";

import Header from "../../../components/Header";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Tag } from "../Enroll/styles";
import { Button } from "../../../components/Modal/ConfirmModal.styles";
import {
  Title,
  TitleText,
  Wrapper,
  Grid,
  Table,
  Day,
  CheckSection,
  CheckBtn,
  Section,
  Stamp,
} from "./styles";

const RecordPresenter = (recordPresenterProps) => {
  const { state, checkedList, onConfirm } = recordPresenterProps;
  const day = new Date();
  const today = day.toString().substring(0, 15);

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            <Title>
              <Tag>Challenge</Tag>
              <TitleText>{state.title}</TitleText>
            </Title>
            <Grid>
              {state.record
                ? state.record.map((list, index) => {
                    return (
                      <Table key={index}>
                        <Day>{list.day}</Day>
                        <CheckSection>
                          {list.status ? (
                            <Stamp>성공!</Stamp>
                          ) : today === list.date ? (
                            <CheckBtn id={list.id} onClick={checkedList}>
                              Check!
                            </CheckBtn>
                          ) : null}
                        </CheckSection>
                      </Table>
                    );
                  })
                : null}
            </Grid>
            <Section>
              {state.status === "FINISHED" ? (
                <Button onClick={onConfirm} id={state.id}>
                  Delete
                </Button>
              ) : (
                <Button onClick={onConfirm} id={state.id}>
                  포기할래요..
                </Button>
              )}
            </Section>
          </Wrapper>
        </Main>
      </Frame>
    </Container>
  );
};

export default RecordPresenter;
