import React, { useState } from "react";

import Loader from "../../components/Loader";
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
  Text,
} from "./styles";

const ChallengePresenter = (challengePresenterProps) => {
  const { state } = challengePresenterProps;
  const [option, setOption] = useState();

  const filter = (event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  };

  return (
    <Container>
      <Section>
        <Header>Challenges</Header>
        <Filter>
          View
          <Select name="filter" onChange={filter}>
            <Option value="all">All</Option>
            <Option value="finished">Finished</Option>
            <Option value="inProgress">In progress</Option>
          </Select>
        </Filter>
      </Section>
      <Wrapper>
        <Scroll>
          {state.isLoading ? (
            <Loader />
          ) : (
            <List>
              {state.challenges.length > 0 ? (
                option === "finished" ? (
                  state.finished.map((list, index) => {
                    return <ChallengeList {...list} key={index} />;
                  })
                ) : option === "inProgress" ? (
                  state.enrolled.map((list, index) => {
                    return <ChallengeList {...list} key={index} />;
                  })
                ) : (
                  state.challenges.map((list, index) => {
                    return <ChallengeList {...list} key={index} />;
                  })
                )
              ) : (
                <Text>Nothing</Text>
              )}
            </List>
          )}
        </Scroll>
      </Wrapper>
      <Button>Enroll</Button>
    </Container>
  );
};

export default ChallengePresenter;
