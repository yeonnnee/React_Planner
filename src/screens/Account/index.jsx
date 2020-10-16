import React, { useEffect } from "react";
import { connect } from "react-redux";

import { authApi } from "../../api";
import AccountPresenter from "./AccountPresenter";
import {
  LOG_OUT,
  LOG_OUT_FAILED,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";

const Account = (accountProps) => {
  const { logOut, state, reset } = accountProps;

  async function onClick() {
    try {
      await authApi.logOut();
      logOut();
    } catch (error) {
      console.log(error);
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
      dispatch({ type: LOG_OUT_FAILED, payload: error });
    },
    reset: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
