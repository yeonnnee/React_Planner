import React from "react";

import { Column, Tag, Text } from "../styles";
import { List, ListItem } from "./styles";

const ChallengeList = (challengeProps) => {
  const { challenges } = challengeProps;

  return (
    <Column>
      <Tag>In Progress</Tag>
      <List>
        {challenges.length > 0 ? (
          challenges.map((list, index) => (
            <ListItem key={index}>
              {index + 1}.{list.title}
            </ListItem>
          ))
        ) : (
          <Text>진행중인 챌린지가 없습니다</Text>
        )}
      </List>
    </Column>
  );
};

export default ChallengeList;
