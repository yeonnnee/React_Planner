import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { ListItem, Column, Icon, Title, Status, SLink } from "./styles";

const ChallengeList = (challengeListProps) => {
  const { title, status, record, id } = challengeListProps;
  return (
    <SLink to={`${id}`}>
      <ListItem>
        <Column>
          <Title>{title}</Title>
          {status === "ENROLLED" && record.length > 0 ? (
            <Status>In Progress / `${record.day}` </Status>
          ) : status === "ENROLLED" && record.length === 0 ? (
            <Status>Ready / starts tomorrow</Status>
          ) : (
            <Status>FINISHED</Status>
          )}
        </Column>
        <Column>
          <Icon icon={faChevronRight} />
        </Column>
      </ListItem>
    </SLink>
  );
};

export default ChallengeList;
