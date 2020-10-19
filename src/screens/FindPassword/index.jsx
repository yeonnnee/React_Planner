import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import ResetPw from "../Account/ResetPw/ResetPwPresenter";

import { accountApi } from "../../api";
import { passwordValidation, confirmPw_validation } from "../SignUp/validation";
import FindPasswordPresenter from "./FindPasswordPresenter";
import {
  CHECK_VERIFICATION,
  CHECK_VERIFICATION_FAILED,
  CHECK_VERIFICATION_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_VALIDATION_ERROR,
} from "../../redux/types";

const FindPassword = (findPasswordProps) => {
  const {
    state,
    history,
    checkEmail,
    verifiedUser,
    failed,
    setError,
    update,
    updated,
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
      passwordValidation(value, setError);
      return setNewPassword({ ...newPassword, password: value });
    }
    if (target === "Confirm Password") {
      const value = event.target.value;
      confirmPw_validation(value, newPassword.password, setError);
      return setNewPassword({ ...newPassword, confirmPw: value });
    }
  }

  async function updatePw() {
    try {
      update();
      await accountApi.patchPW({
        user: user.email,
        updatedPassword: newPassword.password,
      });
      updated();
      history.push("/logIn");
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        setError({ password: error.response.data.msg });
      } else if (status === 504) {
        history.push(504);
      } else if (status === 500) {
        history.push(500);
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
      checkEmail();
      await accountApi.findPassword({ email: user.email });
      verifiedUser();
    } catch (error) {
      const status = error.response.status;
      failed();
      if (status === 400) {
        setUser({ ...user.email, error: error.response.data.msg });
      } else if (status === 504) {
        history.push(504);
      } else if (status === 500) {
        history.push(500);
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
      {!state.verification ? (
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
    checkEmail: () => {
      dispatch({ type: CHECK_VERIFICATION });
    },
    verifiedUser: () => {
      dispatch({ type: CHECK_VERIFICATION_SUCCESS });
    },
    failed: () => {
      dispatch({ type: CHECK_VERIFICATION_FAILED });
    },
    setError: (error) => {
      dispatch({ type: UPDATE_PASSWORD_VALIDATION_ERROR, payload: error });
    },
    update: () => {
      dispatch({ type: UPDATE_PASSWORD });
    },
    updated: () => {
      dispatch({ type: UPDATE_PASSWORD_SUCCESS });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPassword);
