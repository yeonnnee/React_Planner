import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  ListItem,
  Column,
  Icon,
  Title,
  Status,
  SLink,
  Percentage,
  Name,
  Achieve,
  Category,
} from "./styles";

const ChallengeListPresenter = (challengeListProps) => {
  const { list, challengeRecordDay } = challengeListProps;

  return (
    <SLink to={`challenges/${list.id}`}>
      <ListItem>
        <Category>CHALLENGE</Category>
        <Column>
          <Title>{list.title}</Title>
          {list.status === "ENROLLED" && challengeRecordDay ? (
            <Status>In Progress /{challengeRecordDay[0]}</Status>
          ) : list.status === "ENROLLED" && !challengeRecordDay ? (
            <Status>Ready / starts tomorrow</Status>
          ) : (
            <Status>FINISHED</Status>
          )}
        </Column>
        <Column>
          {list.achievement ? (
            <Achieve>
              <Name>Completed</Name>
              <Percentage>{list.achievement}</Percentage>
            </Achieve>
          ) : null}
        </Column>

        <Column>
          <Icon icon={faChevronRight} />
        </Column>
      </ListItem>
    </SLink>
  );
};

export default ChallengeListPresenter;
