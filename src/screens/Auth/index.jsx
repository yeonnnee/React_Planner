import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LogInPresenter from "./LogInPresenter";
import {
  TRY_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";
import { authApi } from "../../api";

const LogIn = (logInProps) => {
  const { setError, send, success, state, resetRecord } = logInProps;
  const [user, setUser] = useState({ email: "", password: "" });

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

  async function logIn() {
    try {
      send();
      await authApi.logIn(user);
      checkAuth();
    } catch (error) {
      if (error.response.status === 400) {
        setError(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  }
  async function onClick() {
    if (user.email === "" || user.password === "") {
      setError("아이디와 비밀번호를 입력해주시기 바랍니다");
    } else if (user.password.length > 12) {
      setError("비밀번호는 8~12자리로 입력해주십시오");
    } else if (!user.email.includes("@")) {
      setError("유효하지 않은 이메일입니다");
    } else {
      setError("");
      logIn();
    }
  }

  async function checkAuth() {
    try {
      const res = await authApi.checkAuth();
      const user = await res.data.user;
      success({ user: user.email, name: user.name });
    } catch (error) {
      if (error.response.status === 401) {
        setError("");
      } else {
        console.log(error);
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
        <LogInPresenter
          {...state}
          {...user}
          onClick={onClick}
          onChange={onChange}
        />
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
      dispatch({ type: LOGIN_FAILED, payload: error });
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
