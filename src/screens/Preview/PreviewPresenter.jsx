import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";

export const Section = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-rows: 80px 250px 200px;
  gap: 25px;
`;
export const Column = styled.div`
  border: 1px solid #9c9b9b;
  font-size: 15px;
  &:nth-child(3) {
    display: grid;
    place-items: center;
    border: none;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;
export const Tag = styled.div`
  width: 150px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 1px solid #9c9b9b;
  background-color: white;
  transform: translateX(285px) translateY(-13px);
`;

export const Title = styled.div`
  width: 150px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 1px solid #9c9b9b;
  background-color: white;
  transform: translateX(40px) translateY(-13px);
`;

export const Tasks = styled.div`
  border: 1px solid #9c9b9b;
  width: 240px;
  height: 200px;
  &:nth-child(2) {
    border: none;
    border-top: 1px solid #9c9b9b;
    transform: translateY(100px);
  }
`;

const PreviewPresenter = () => {
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Column>
              <Tag>In Progress</Tag>
            </Column>
            <Column>
              <Tag>Today&apos;s Schedule</Tag>
            </Column>
            <Column>
              <Tasks>
                <Title>Pending</Title>
              </Tasks>
              <Tasks>
                <Title>Today&apos;s Tasks</Title>
              </Tasks>
              <Tasks>
                <Title>Finished</Title>
              </Tasks>
            </Column>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default PreviewPresenter;
