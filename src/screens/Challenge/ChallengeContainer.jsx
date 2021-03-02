import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import { challengeApi } from "../../api";
import GatewayError from "../../components/msg/GatewayError";
import ServerError from "../../components/msg/ServerError";
import ChallengePresenter from "./ChallengePresenter";
import {
  CHALLENGE_ERROR,
  FETCH_CHALLENGE,
  FETCH_CHALLENGE_SUCCESS,
} from "../../redux/actions/challengeActions";

const Challenge = (challengeProps) => {
  const { state, fetchStart, fetch_success, setError } = challengeProps;
  const [option, setOption] = useState("all");

  const filter = (event) => {
    setOption(event.target.value);
  };

  const fetchData = useCallback(async () => {
    fetchStart();
    try {
      const res = await challengeApi.getChallenges();
      fetch_success(res.data.challenges);
    } catch (error) {
      const status = error.response.status;
      if (status && status === 500) {
        setError("500");
      } else if (status && status === 504) {
        setError("504");
      } else {
        console.log(error);
      }
    }
  }, [fetchStart, fetch_success, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <ChallengePresenter state={state} filter={filter} option={option} />
      )}
    </>
  );
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

    setError: (error) => {
      dispatch({ type: CHALLENGE_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
