import React from "react";
import { connect } from "react-redux";
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
import { challengeApi } from "../../../api";
import { CHALLENGE_ERROR } from "../../../redux/types";

const ChallengeList = (challengeListProps) => {
  const {
    title,
    status,
    record,
    achievement,
    id,
    selectList,
    setError,
  } = challengeListProps;

  const updateStatus = async () => {
    try {
      await challengeApi.updateStatus({ id: id });
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
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

function mapStateToProps(state) {
  return { state: state.challengeReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    setError: (error) => {
      dispatch({ type: CHALLENGE_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
