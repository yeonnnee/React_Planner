import React, { useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { authApi } from "../../api";
import HomePresenter from "./HomePresenter";
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";

const Home = (homeProps) => {
  const { state, setError, success, resetRecord, history } = homeProps;

  // 페이지 render시 실행되는 함수
  const checkAuth = useCallback(async () => {
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
        history.push("/504");
      } else if (status === 500) {
        history.push("/500");
      } else {
        return;
      }
    }
  }, [success, setError, history]);

  useEffect(() => {
    checkAuth();
    resetRecord();
  }, [resetRecord, checkAuth]);

  return (
    <>{state.isAuthenticated ? <Redirect to="/tasks" /> : <HomePresenter />}</>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

function mapDispatchToProps(dispatch) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
