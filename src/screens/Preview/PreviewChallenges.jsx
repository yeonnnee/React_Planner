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

  return (
    <Column>
      <Tag>Goal</Tag>
      <ChallengeSection>
        <ChallengesList>
          {challenges.length > 0 ? (
            challenges.map((challenge, index) => (
              <ChallengeListItem key={index}>
                {index + 1}.{challenge.title}
              </ChallengeListItem>
            ))
          ) : (
            <Text>진행중인 챌린지가 없습니다</Text>
          )}
        </ChallengesList>
        <More to="/challenges">더보기</More>
      </ChallengeSection>
    </Column>
  );
};

export default PreviewChallenges;
