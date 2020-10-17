import React, { useState } from "react";
import { connect } from "react-redux";

import Verification from "../Verification";
import ResetPwPresenter from "./ResetPwPresenter";
import { accountApi, authApi } from "../../../api";
import {
  passwordValidation,
  confirmPw_validation,
} from "../../SignUp/validation";

import {
  LOG_OUT,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_VALIDATION_ERROR,
} from "../../../redux/types";

const ResetPw = (resetPwProps) => {
  const { state, user, setError, update, updated, logOut } = resetPwProps;
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPw: "",
  });

  function onChange(event) {
    const target = event.target.placeholder;

    if (target === "Password") {
      const value = event.target.value;
      passwordValidation(value, setError);
      return setNewPassword({ ...newPassword, password: value });
    }
    if (target === "Confirm Password") {
      const value = event.target.value;
      confirmPw_validation(value, newPassword.password, setError);
      return setNewPassword({ ...newPassword, confirmPw: value });
    }
  }
  async function resetAuth() {
    try {
      await authApi.logOut();
      logOut();
    } catch (error) {
      console.log(error);
    }
  }
  async function updateData() {
    try {
      update();
      await accountApi.patchPW({
        user: user.user,
        updatedPassword: newPassword.password,
      });
      updated();
      resetAuth();
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        setError({ password: error.response.data.msg });
      }
    }
  }
  function onClick() {
    if (
      state.validation.updatedPassword === "" &&
      state.validation.confirmPassword === "" &&
      newPassword.password !== ""
    ) {
      updateData();
    }
  }

  return (
    <>
      {state.verification ? (
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
    setError: (error) => {
      dispatch({ type: UPDATE_PASSWORD_VALIDATION_ERROR, payload: error });
    },
    update: () => {
      dispatch({ type: UPDATE_PASSWORD });
    },
    updated: () => {
      dispatch({ type: UPDATE_PASSWORD_SUCCESS });
    },
    logOut: () => {
      dispatch({ type: LOG_OUT });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPw);
