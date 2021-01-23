import React from "react";
import { connect } from "react-redux";

import ChallengeListPresenter from "./ChallengeListPresenter";
import { challengeApi } from "../../../api";
import { CHALLENGE_ERROR } from "../../../redux/actions/challengeActions";

const ChallengeList = (challengeListProps) => {
  const {
    title,
    record,
    achievement,
    status,
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
    <ChallengeListPresenter
      title={title}
      id={id}
      status={status}
      achievement={achievement}
      challengeDay={challengeDay}
      selectList={selectList}
    />
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
