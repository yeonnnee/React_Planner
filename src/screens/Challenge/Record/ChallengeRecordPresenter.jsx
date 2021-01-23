import React from "react";

import Header from "../../../components/Header";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Tag } from "../Enroll/styles";
import { Button } from "../styles";
import {
  Title,
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

          <div>
            <Tag>Challenge</Tag>
            <Title>{state.selected.title}</Title>
          </div>
          <Grid>
            {state.selected.record.map((list, index) => {
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
            })}
          </Grid>
          <Section>
            {state.selected.status === "FINISHED" ? (
              <Button onClick={onConfirm} id={state.selected.id}>
                Delete
              </Button>
            ) : (
              <Button onClick={onConfirm} id={state.selected.id}>
                포기할래요..
              </Button>
            )}
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default RecordPresenter;
