import React from "react";
import styled from "styled-components";

import { Header, Tag } from "../Enroll/styles";
import { Button } from "../styles";

const Container = styled.div``;
const Title = styled.div`
  font-size: 28px;
  margin: 0 20px;
  text-align: center;
  line-height: 1.5;
  font-family: "Do Hyeon", sans-serif;
`;
const Grid = styled.div`
  width: 100%;
  height: 450px;
  display: grid;
  margin-top: 20px;
  padding: 0 20px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
const Table = styled.div`
  width: 75px;
  height: 80px;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 20px 60px;
`;
const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #40739e;
  font-family: "Do Hyeon", sans-serif;
`;
const CheckSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckBtn = styled.button``;
const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecordPresenter = (recordPresenterProps) => {
  const { selected } = recordPresenterProps;
  const day = new Date();
  const today = day.toString().substring(0, 15);

  return (
    <Container>
      <Header>
        <Tag>Challenge</Tag>
        <Title>{selected.title}</Title>
      </Header>
      <Grid>
        {selected.record.map((list, index) => {
          return (
            <Table key={index}>
              <Day>{list.day}</Day>
              <CheckSection>
                {today === list.date ? <CheckBtn>Check!</CheckBtn> : null}
              </CheckSection>
            </Table>
          );
        })}
      </Grid>
      <Section>
        <Button>포기할래요..</Button>
      </Section>
    </Container>
  );
};

export default RecordPresenter;
