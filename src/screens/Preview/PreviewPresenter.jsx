import React from "react";

import Header from "../../components/Header";
import Calendar from "../Monthly/Calendar/PreviewCalendar";
import { Container, Frame, Main } from "../../components/styles/Templates";
import { Column, Section, Tag, Tasks, Title, Monthly, Detail } from "./styles";

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
              <Monthly>
                <Detail>
                  <Calendar />
                </Detail>
                <Detail></Detail>
              </Monthly>
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
