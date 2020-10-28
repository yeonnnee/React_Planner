import React from "react";

import Loader from "../../../components/Loader";
import { Header, Tag } from "../Enroll/styles";
import { Button } from "../styles";
import {
  Container,
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
  const { state, checkedList, deleteChallenge } = recordPresenterProps;
  const day = new Date();
  const today = day.toString().substring(0, 15);

  return (
    <Container>
      {state.isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Tag>Challenge</Tag>
            <Title>{state.selected.title}</Title>
          </Header>
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
              <Button onClick={deleteChallenge} id={state.selected.id}>
                Delete
              </Button>
            ) : (
              <Button onClick={deleteChallenge} id={state.selected.id}>
                포기할래요..
              </Button>
            )}
          </Section>
        </>
      )}
    </Container>
  );
};

export default RecordPresenter;
