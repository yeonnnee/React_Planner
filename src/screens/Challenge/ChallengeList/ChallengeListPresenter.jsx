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
  const { challengeDay, id, title, achievement, status } = challengeListProps;
  return (
    <SLink to={`challenge/${id}`}>
      <ListItem>
        <Category>CHALLENGE</Category>
        <Column>
          <Title>{title}</Title>
          {status === "ENROLLED" && challengeDay.length > 0 ? (
            <Status>In Progress / {challengeDay[0].day}</Status>
          ) : status === "ENROLLED" && challengeDay.length === 0 ? (
            <Status>Ready / starts tomorrow</Status>
          ) : (
            <Status>FINISHED</Status>
          )}
        </Column>
        <Column>
          {achievement ? (
            <Achieve>
              <Name>Completed</Name>
              <Percentage>{achievement}</Percentage>
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
