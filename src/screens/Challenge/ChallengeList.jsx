import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { ListItem, Column, Icon, Title, Status, SLink } from "./styles";
import { challengeApi } from "../../api";

const ChallengeList = (challengeListProps) => {
  const {
    title,
    status,
    record,
    achievement,
    id,
    selectList,
    history,
  } = challengeListProps;

  const updateStatus = async () => {
    try {
      await challengeApi.updateStatus({ id: id });
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      }
    }
  };

  // 진행 날짜 표시
  const today = new Date();
  const date = today.toString().substring(0, 15);
  const challengeDay = record.filter((list) => list.date === date);

  // 마지막 날
  const finishedDate = new Date(record[29].date);
  const lastDate = +record[29].date.toString().split(" ")[2];
  finishedDate.setDate(`${lastDate + 1}`);

  if (date === finishedDate.toString().substring(0, 15)) {
    updateStatus();
  }

  return (
    <SLink to={`${id}`}>
      <ListItem onClick={selectList} id={id}>
        <Column>
          <Title>{title}</Title>
          {status === "ENROLLED" && challengeDay.length > 0 ? (
            <Status>In Progress / `${challengeDay.day}` </Status>
          ) : status === "ENROLLED" && challengeDay.length === 0 ? (
            <Status>Ready / starts tomorrow</Status>
          ) : (
            <Status>FINISHED </Status>
          )}
        </Column>
        <Column>{achievement ? <Status>{achievement}</Status> : null}</Column>
        <Column>
          <Icon icon={faChevronRight} />
        </Column>
      </ListItem>
    </SLink>
  );
};

export default ChallengeList;
