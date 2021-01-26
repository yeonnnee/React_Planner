import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { challengeApi } from "../../../api";
import { connect } from "react-redux";

import ChallengeEnrollPresenter from "./ChallengeEnrollPresenter";
import {
  ENROLLED_CHALLENGE,
  ENROLLED_CHALLENGE_SUCCESS,
  CHALLENGE_ERROR,
} from "../../../redux/actions/challengeActions";
import ServerError from "../../../components/msg/ServerError";
import GatewayError from "../../../components/msg/GatewayError";

const ChallengeEnrollContainer = (enrollProps) => {
  const { history, state, save, success, setError } = enrollProps;
  const [challenge, setChallenge] = useState({ id: "", title: "", error: "" });

  const getTitle = (event) => {
    const value = event.target.value;
    if (value.length > 15) {
      setChallenge({
        id: "",
        title: value,
        error: "15자 이내로 작성해주십시오",
      });
    } else {
      setChallenge({ id: uuidv4().toString(), title: value, error: "" });
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onClick = async () => {
    try {
      save();
      if (!challenge.error && challenge.title) {
        await challengeApi.postChallenge(challenge);
        success();
        history.push("/challenges");
      }
    } catch (error) {
      if (error.response.status === 500) {
        setError("500");
      } else if (error.response.status === 504) {
        setError("504");
      }
    }
  };

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <ChallengeEnrollPresenter
          getTitle={getTitle}
          error={challenge.error}
          onSubmit={onSubmit}
          onClick={onClick}
          {...state}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.challengeReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    save: () => {
      return dispatch({ type: ENROLLED_CHALLENGE });
    },
    success: () => {
      return dispatch({ type: ENROLLED_CHALLENGE_SUCCESS });
    },
    setError: (error) => {
      return dispatch({ type: CHALLENGE_ERROR, payload: error });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeEnrollContainer);
