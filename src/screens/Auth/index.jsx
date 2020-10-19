import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LogInPresenter from "./LogInPresenter";
import {
  TRY_LOGIN,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";
import { authApi } from "../../api";

const LogIn = (logInProps) => {
  const { setError, send, success, state, resetRecord, history } = logInProps;
  const [user, setUser] = useState({ email: "", password: "" });

  // 로그인 버튼 클릭 후 VALIDATION ERROR 없을 시 실행되는 함수
  async function logIn() {
    try {
      send();
      await authApi.logIn(user);
      checkAuth();
    } catch (error) {
      const status = error.response.status;
      const msg = error.response.data.msg;

      if (status === 400) {
        setError(msg);
      } else if (status === 504) {
        history.push("/504");
      } else if (status === 500) {
        history.push("/500");
      }
    }
  }
  // 로그인 버튼 눌렀을때 실행되는 함수
  async function onClick() {
    if (!user.name || !user.password) {
      setError("아이디와 비밀번호를 입력해주시기 바랍니다");
    } else if (user.password.length > 16) {
      setError("비밀번호는 8~16자리로 입력해주십시오");
    } else if (!user.email.includes("@")) {
      setError("유효하지 않은 이메일입니다");
    } else {
      setError("");
      logIn();
    }
  }

  // input 입력값 저장
  function onChange(event) {
    const target = event.target;

    if (target.name === "email") {
      const value = target.value;
      setUser({ ...user, email: value });
    }
    if (target.name === "password") {
      const value = target.value;
      setUser({ ...user, password: value });
    }
  }

  // 페이지 render시 실행되는 함수
  async function checkAuth() {
    try {
      const res = await authApi.checkAuth();
      const user = await res.data.user;
      success({ user: user.email, name: user.name });
    } catch (error) {
      const status = error.response.status;

      if (status === 401) {
        setError("");
      } else if (status === 400) {
        setError(error.response.data.msg);
      } else if (status === 504) {
        history.push(504);
      } else if (status === 500) {
        history.push(500);
      }
    }
  }

  useEffect(() => {
    checkAuth();
    resetRecord();
  }, []);

  return (
    <>
      {state.isAuthenticated ? (
        <Redirect to="/tasks" />
      ) : (
        <LogInPresenter {...state} onClick={onClick} onChange={onChange} />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    send: () => {
      dispatch({ type: TRY_LOGIN });
    },
    setError: (error) => {
      dispatch({ type: AUTH_ERROR, payload: error });
    },
    success: (user) => {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    },
    resetRecord: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
