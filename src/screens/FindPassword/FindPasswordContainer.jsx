import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import ResetPw from "../Account/ResetPw/ResetPwPresenter";

import { accountApi } from "../../api";
import { passwordValidation, confirmPw_validation } from "../SignUp/validation";
import FindPasswordPresenter from "./FindPasswordPresenter";
import ServerError from "../../components/msg/ServerError";
import GatewayError from "../../components/msg/GatewayError";

import {
  LOADING,
  CHECK_VERIFICATION,
  RESET_VERIFICATION_RECORD,
  UPDATE_PASSWORD_VALIDATION_ERROR,
  ACCOUNT_ERROR,
} from "../../redux/actions/accountActions";

const FindPassword = (findPasswordProps) => {
  const {
    state,
    history,
    verifiedUser,
    setValidationError,
    loading,
    updated,
    setError,
  } = findPasswordProps;

  const [user, setUser] = useState({ email: "", error: "" });
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPw: "",
  });

  // 비밀번호 재설정
  function onChangePw(event) {
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

  async function updatePw() {
    try {
      loading();
      await accountApi.patchPW({
        user: user.email,
        updatedPassword: newPassword.password,
      });
      updated();
      history.push("/logIn");
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        setValidationError({ password: error.response.data.msg });
      } else if (status === 504) {
        setError("504");
      } else if (status === 500) {
        setError("500");
      } else {
        return;
      }
    }
  }

  // 이메일 입력
  function onChange(event) {
    const value = event.target.value;
    setUser({ email: value, error: "" });
  }
  async function verify() {
    try {
      loading();
      await accountApi.findPassword({ email: user.email });
      verifiedUser();
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        setUser({ ...user.email, error: error.response.data.msg });
      } else if (status === 504) {
        setError("504");
      } else if (status === 500) {
        setError("500");
      } else {
        return;
      }
    }
  }
  function onClick() {
    if (!user.email) {
      setUser({ email: "", error: "이메일을 입력해주세요" });
    } else if (!user.email.includes("@")) {
      setUser({ ...user.email, error: "올바르지 않은 이메일 형식입니다" });
    } else if (user.email.length > 80) {
      setUser({ ...user.email, error: "제한된 글자수를 초과하였습니다" });
    } else if (user.email && !user.error) {
      verify();
    }
  }
  function onCancel() {
    history.push("/");
  }

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : !state.verification ? (
        <FindPasswordPresenter
          state={state}
          user={user}
          onChange={onChange}
          onClick={onClick}
          onCancel={onCancel}
        />
      ) : (
        <ResetPw state={state} onChange={onChangePw} onClick={updatePw} />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.accountReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    loading: () => {
      dispatch({ type: LOADING });
    },
    verifiedUser: () => {
      dispatch({ type: CHECK_VERIFICATION });
    },
    setValidationError: (error) => {
      dispatch({ type: UPDATE_PASSWORD_VALIDATION_ERROR, payload: error });
    },
    updated: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
    setError: (error) => {
      dispatch({ type: ACCOUNT_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPassword);
