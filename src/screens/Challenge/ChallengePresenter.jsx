import React from "react";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import ChallengeList from "./ChallengeList";
import {
  Section,
  Filter,
  Select,
  Option,
  Wrapper,
  Scroll,
  List,
  Text,
  SLink,
  Button,
} from "./styles";

const ChallengePresenter = (challengePresenterProps) => {
  const { state, selectList, filter, option } = challengePresenterProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
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
                  {option === "finished" && state.finished.length > 0 ? (
                    state.finished.map((list, index) => {
                      return (
                        <ChallengeList
                          {...list}
                          key={index}
                          selectList={selectList}
                        />
                      );
                    })
                  ) : option === "inProgress" && state.enrolled.length > 0 ? (
                    state.enrolled.map((list, index) => {
                      return (
                        <ChallengeList
                          {...list}
                          key={index}
                          selectList={selectList}
                        />
                      );
                    })
                  ) : option === "all" && state.challenges.length > 0 ? (
                    state.challenges.map((list, index) => {
                      return (
                        <ChallengeList
                          {...list}
                          key={index}
                          selectList={selectList}
                        />
                      );
                    })
                  ) : (
                    <Text>Nothing</Text>
                  )}
                </List>
              )}
            </Scroll>
          </Wrapper>
          <SLink to="/challenge/enroll">
            <Button>Enroll</Button>
          </SLink>
        </Main>
      </Frame>
    </Container>
  );
};

export default ChallengePresenter;
