import React from "react";

import Header from "../../components/Header";
import Challenges from "./PreviewChallenges";
import Schedule from "./PreviewSchedule";
import Tasks from "./PreviewTasks";
import { Container, Frame, Main } from "../../components/styles/Templates";
import { Section } from "./styles";

const PreviewPresenter = (previewProps) => {
  const { tasks, schedule, challenges } = previewProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Challenges challenges={challenges} />
            <Schedule schedule={schedule} />
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
