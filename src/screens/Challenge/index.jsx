import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { challengeApi } from "../../api";
import {
  FETCH_CHALLENGE,
  FETCH_CHALLENGE_FAIELD,
  FETCH_CHALLENGE_SUCCESS,
} from "../../redux/types";

import ChallengePresenter from "./ChallengePresenter";

const Challenge = (challengeProps) => {
  const {
    state,
    history,
    fetchStart,
    fetch_success,
    fetch_failed,
  } = challengeProps;

  const fetchData = useCallback(async () => {
    fetchStart();
    try {
      const res = await challengeApi.getChallenges();
      console.log(res.data);
      fetch_success(res.data.challenges);
    } catch (error) {
      const status = error.response.status;
      fetch_failed();
      if (status === 500) {
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      }
    }
  }, [fetchStart, fetch_success, fetch_failed, history]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <ChallengePresenter state={state} />;
};

function mapStateToProps(state) {
  return { state: state.challengeReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchStart: () => {
      dispatch({ type: FETCH_CHALLENGE });
    },
    fetch_success: (data) => {
      dispatch({ type: FETCH_CHALLENGE_SUCCESS, payload: data });
    },
    fetch_failed: () => {
      dispatch({ type: FETCH_CHALLENGE_FAIELD });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
