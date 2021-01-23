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
} from "./styles";

const ChallengeListPresenter = (challengeListProps) => {
  const {
    selectList,
    challengeDay,
    id,
    title,
    achievement,
    status,
  } = challengeListProps;
  return (
    <SLink to={`challenge/${id}`}>
      <ListItem onClick={selectList} id={id}>
        <Column onClick={selectList} id={id}>
          <Title onClick={selectList} id={id}>
            {title}
          </Title>
          {status === "ENROLLED" && challengeDay.length > 0 ? (
            <Status onClick={selectList} id={id}>
              In Progress / {challengeDay[0].day}
            </Status>
          ) : status === "ENROLLED" && challengeDay.length === 0 ? (
            <Status onClick={selectList} id={id}>
              Ready / starts tomorrow
            </Status>
          ) : (
            <Status onClick={selectList} id={id}>
              FINISHED
            </Status>
          )}
        </Column>
        {achievement ? (
          <Achieve onClick={selectList} id={id}>
            <Name onClick={selectList} id={id}>
              Completed
            </Name>
            <Percentage onClick={selectList} id={id}>
              {achievement}
            </Percentage>
          </Achieve>
        ) : null}
        <Column onClick={selectList} id={id}>
          <Icon icon={faChevronRight} onClick={selectList} id={id} />
        </Column>
      </ListItem>
    </SLink>
  );
};

export default ChallengeListPresenter;
