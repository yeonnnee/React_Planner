import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { challengeApi } from "../../../api";
import { connect } from "react-redux";

import EnrollPresenter from "./EnrollPresenter";
import {
  ENROLLED_CHALLENGE,
  ENROLLED_CHALLENGE_SUCCESS,
} from "../../../redux/types";

const Enroll = (enrollProps) => {
  const { history, state, save, success } = enrollProps;
  const [challenge, setChallenge] = useState({ id: "", title: "", error: "" });

  const getTitle = (event) => {
    const value = event.target.value;
    if (value.length > 20) {
      setChallenge({
        id: "",
        title: value,
        error: "20자 이내로 작성해주십시오",
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
        history.push("/challenge");
      }
    } catch (error) {
      if (error.response.status === 500) {
        history.push("/500");
      } else if (error.response.status === 504) {
        history.push("/504");
      }
    }
  };

  return (
    <EnrollPresenter
      getTitle={getTitle}
      error={challenge.error}
      onSubmit={onSubmit}
      onClick={onClick}
      {...state}
    />
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Enroll);
