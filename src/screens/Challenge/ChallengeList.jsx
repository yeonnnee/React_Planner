import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { ListItem, Column, Icon, Title, Status } from "./styles";

const ChallengeList = () => {
  return (
    <ListItem>
      <Column>
        <Title>Read Books</Title>
        <Status>In Progress / Day 1</Status>
      </Column>
      <Column>
        <Icon icon={faChevronRight} />
      </Column>
    </ListItem>
  );
};

export default ChallengeList;
