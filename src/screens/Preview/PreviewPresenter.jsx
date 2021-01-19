import React from "react";

import Header from "../../components/Header";
import Calendar from "../Monthly/Calendar/PreviewCalendar";
import { Container, Frame, Main } from "../../components/styles/Templates";
import SchedulList from "./ScheduleList";
import ChallengeList from "./ChallengeList";
import TasksList from "./TasksList";
import { Column, Section, Tag, Tasks, Title, Monthly, Detail } from "./styles";

const PreviewPresenter = (previewProps) => {
  const { tasks, monthly, challenge } = previewProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Column>
              <Tag>In Progress</Tag>
              <ChallengeList challenges={challenge.enrolled} />
            </Column>
            <Column>
              <Tag>Today&apos;s Schedule</Tag>
              <Monthly>
                <Detail>
                  <Calendar />
                </Detail>
                <Detail>
                  <SchedulList schedule={monthly.selected} />
                </Detail>
              </Monthly>
            </Column>

            <Column>
              <Tasks>
                <Title>Pending</Title>
                <TasksList tasks={tasks.pendingList} />
              </Tasks>

              <Tasks>
                <Title>Today&apos;s Tasks</Title>
              </Tasks>

              <Tasks>
                <Title>Finished</Title>
                <TasksList tasks={tasks.finishedList} />
              </Tasks>
            </Column>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default PreviewPresenter;
