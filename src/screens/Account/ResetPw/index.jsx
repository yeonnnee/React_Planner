import React, { useState } from "react";
import { connect } from "react-redux";

import Verification from "../Verification";
import ResetPwPresenter from "./ResetPwPresenter";
import { accountApi, authApi } from "../../../api";
import ServerError from "../../../components/msg/ServerError";
import GatewayError from "../../../components/msg/GatewayError";
import {
  passwordValidation,
  confirmPw_validation,
} from "../../SignUp/validation";

import {
  ACCOUNT_ERROR,
  LOADING,
  LOG_OUT,
  RESET_VERIFICATION_RECORD,
  UPDATE_PASSWORD_VALIDATION_ERROR,
} from "../../../redux/types";

const ResetPw = (resetPwProps) => {
  const {
    state,
    user,
    setValidationError,
    setError,
    loading,
    updated,
    logOut,
  } = resetPwProps;
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPw: "",
  });

  function onChange(event) {
    const target = event.target.placeholder;

    if (target === "Password") {
      const value = event.target.value;
      passwordValidation(value, setValidationError);
      return setNewPassword({ ...newPassword, password: value });
    }
    if (target === "Confirm Password") {
      const value = event.target.value;
      confirmPw_validation(value, newPassword.password, setValidationError);
      return setNewPassword({ ...newPassword, confirmPw: value });
    }
  }
  async function resetAuth() {
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
  async function updateData() {
    try {
      loading();
      await accountApi.patchPW({
        user: user.user,
        updatedPassword: newPassword.password,
      });
      updated();
      resetAuth();
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        setValidationError({ password: error.response.data.msg });
      } else if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
      } else {
        return;
      }
    }
  }
  function onClick() {
    if (
      !state.validation.updatedPassword &&
      !state.validation.confirmPassword &&
      newPassword.password
    ) {
      updateData();
    }
  }

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : state.verification ? (
        <ResetPwPresenter onChange={onChange} state={state} onClick={onClick} />
      ) : (
        <Verification {...user} />
      )}
    </>
  );
};
function mapStateToProps(state) {
  return { state: state.accountReducer, user: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    setValidationError: (error) => {
      dispatch({ type: UPDATE_PASSWORD_VALIDATION_ERROR, payload: error });
    },
    loading: () => {
      dispatch({ type: LOADING });
    },
    updated: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
    logOut: () => {
      dispatch({ type: LOG_OUT });
    },
    setError: (error) => {
      dispatch({ type: ACCOUNT_ERROR, payload: error });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPw);
