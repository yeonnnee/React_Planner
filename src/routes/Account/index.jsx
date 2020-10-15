import React from "react";
import { connect } from "react-redux";

import AccountPresenter from "./AccountPresenter";
import { LOG_OUT, LOG_OUT_FAILED } from "../../redux/types";

const Account = (accountProps) => {
  const { logOut, state } = accountProps;
  return <AccountPresenter logOut={logOut} state={state} />;
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
