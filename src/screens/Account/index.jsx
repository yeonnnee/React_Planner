import React, { useEffect } from "react";
import { connect } from "react-redux";

import { authApi } from "../../api";
import AccountPresenter from "./AccountPresenter";
import {
  LOG_OUT,
  AUTH_ERROR,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";

const Account = (accountProps) => {
  const { logOut, state, reset, history } = accountProps;

  async function onClick() {
    try {
      await authApi.logOut();
      logOut();
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        history.push("/500");
      } else if (status === 504) {
        history.push("/504");
      } else {
        return;
      }
    }
  }
  useEffect(() => {
    reset();
  });
  return <AccountPresenter state={state} onClick={onClick} />;
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch({ type: LOG_OUT });
    },
    setError: (error) => {
      dispatch({ type: AUTH_ERROR, payload: error });
    },
    reset: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
