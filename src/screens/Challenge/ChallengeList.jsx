import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { ListItem, Column, Icon, Title, Status } from "./styles";

const ChallengeList = (challengeListProps) => {
  const { title, status } = challengeListProps;
  return (
    <ListItem>
      <Column>
        <Title>{title}</Title>

        {status === "ENROLLED" ? (
          <Status>In Progress / Day1 </Status>
        ) : (
          <Status>FINISHED</Status>
        )}
      </Column>
      <Column>
        <Icon icon={faChevronRight} />
      </Column>
    </ListItem>
  );
};

export default ChallengeList;
