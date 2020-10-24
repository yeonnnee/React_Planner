import React from "react";

import ChallengeList from "./ChallengeList";
import {
  Container,
  Section,
  Header,
  Filter,
  Select,
  Option,
  Wrapper,
  Scroll,
  List,
  Button,
} from "./styles";

const ChallengePresenter = () => {
  return (
    <Container>
      <Section>
        <Header>Challenges</Header>
        <Filter>
          View
          <Select name="filter">
            <Option value="all">All</Option>
            <Option value="finished">Finished</Option>
            <Option value="inProgress">In progress</Option>
          </Select>
        </Filter>
      </Section>
      <Wrapper>
        <Scroll>
          <List>
            <ChallengeList />
          </List>
        </Scroll>
      </Wrapper>
      <Button>Enroll</Button>
    </Container>
  );
};

export default ChallengePresenter;
