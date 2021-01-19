import React from "react";

import { Column, Tag, Text, ChallengesList, ChallengeListItem } from "./styles";

const PreviewChallenges = (challengeProps) => {
  const { challenges } = challengeProps;

  return (
    <Column>
      <Tag>In Progress</Tag>
      <ChallengesList>
        {challenges.length > 0 ? (
          challenges.map((list, index) => (
            <ChallengeListItem key={index}>
              {index + 1}.{list.title}
            </ChallengeListItem>
          ))
        ) : (
          <Text>진행중인 챌린지가 없습니다</Text>
        )}
      </ChallengesList>
    </Column>
  );
};

export default PreviewChallenges;
