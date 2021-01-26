import React from "react";
import { connect } from "react-redux";

import ChallengeListPresenter from "./ChallengeListPresenter";
import { challengeApi } from "../../../api";
import { CHALLENGE_ERROR } from "../../../redux/actions/challengeActions";

const ChallengeList = (challengeListProps) => {
  const { list, setError } = challengeListProps;

  // 챌린지 종료시 상태 업데이트
  const updateStatus = async () => {
    try {
      await challengeApi.updateStatus({ id: list.id });
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
  const challengeRecordDay = list.record.find(
    (recordTable) => recordTable.date === date
  );

  // 마지막 날
  const finishedDate = new Date(list.record[29].date);
  const lastDate = +list.record[29].date.toString().split(" ")[2];
  finishedDate.setDate(`${lastDate + 1}`);

  if (date === finishedDate.toString().substring(0, 15)) {
    updateStatus();
  }

  return (
    <ChallengeListPresenter
      list={list}
      challengeRecordDay={challengeRecordDay}
    />
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setError: (error) => {
      dispatch({ type: CHALLENGE_ERROR, payload: error });
    },
  };
}

export default connect(null, mapDispatchToProps)(ChallengeList);
