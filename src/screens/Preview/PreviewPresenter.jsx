import React from "react";

import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import ScheduleList from "./Schedule";
import ChallengeList from "./Challenges";
import Tasks from "./Tasks";
import { Section } from "./styles";

const PreviewPresenter = (previewProps) => {
  const { tasks, monthly, challenge } = previewProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <ChallengeList challenges={challenge.enrolled} />
            <ScheduleList schedule={monthly.selected} />
            <Tasks
              pendingList={tasks.pendingList}
              finishedList={tasks.finishedList}
            />
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default PreviewPresenter;
