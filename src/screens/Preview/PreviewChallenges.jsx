import React from "react";

import {
  Column,
  Tag,
  Text,
  ChallengeSection,
  ChallengesList,
  ChallengeListItem,
  More,
} from "./styles";

const PreviewChallenges = (challengeProps) => {
  const { challenges } = challengeProps;
  const challengesArr = challenges.splice(0, 3);

  return (
    <Column>
      <Tag>Goal</Tag>
      <ChallengeSection>
        <ChallengesList>
          {challengesArr.length > 0 ? (
            challengesArr.map((challenge, index) => (
              <ChallengeListItem key={index}>
                {index + 1}.{challenge.title}
              </ChallengeListItem>
            ))
          ) : (
            <Text>진행중인 챌린지가 없습니다</Text>
          )}
        </ChallengesList>
        <More to="/challenge">더보기</More>
      </ChallengeSection>
    </Column>
  );
};

export default PreviewChallenges;
