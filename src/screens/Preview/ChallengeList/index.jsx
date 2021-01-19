import React from "react";
import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  place-items: center;
`;
export const ListItem = styled.li``;
export const Text = styled.div``;

const ChallengeList = (challengeProps) => {
  const { challenges } = challengeProps;

  return (
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
  );
};

export default ChallengeList;
