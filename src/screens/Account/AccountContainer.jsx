import React, { useEffect } from "react";
import { connect } from "react-redux";

import { authApi } from "../../api";
import AccountPresenter from "./AccountPresenter";
import { LOG_OUT } from "../../redux/actions/authActions";
import {
  RESET_VERIFICATION_RECORD,
  ACCOUNT_ERROR,
} from "../../redux/actions/accountActions";
import ServerError from "../../components/msg/ServerError";
import GatewayError from "../../components/msg/GatewayError";

const Account = (accountProps) => {
  const { logOut, state, reset, setError } = accountProps;

  async function onClick() {
    try {
      await authApi.logOut();
      logOut();
    } catch (error) {
      const status = error.response.status;
      if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
      } else {
        return;
      }
    }
  }
  useEffect(() => {
    reset();
  });
  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <AccountPresenter state={state} onClick={onClick} />
      )}
    </>
  );
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
      dispatch({ type: ACCOUNT_ERROR, payload: error });
    },
    reset: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
