import React, { useCallback, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { authApi } from "../../api";
import HomePresenter from "./HomePresenter";
import ServerError from "../../components/msg/ServerError";
import GatewayError from "../../components/msg/GatewayError";
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";

const Home = (homeProps) => {
  const { state, setError, success, resetRecord } = homeProps;

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
      } else if (status === 504) {
        setError("504");
      } else if (status === 500) {
        setError("500");
      } else {
        return;
      }
    }
  }, [success, setError]);

  useEffect(() => {
    checkAuth();
    resetRecord();
  }, [resetRecord, checkAuth]);

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : state.isAuthenticated ? (
        <Redirect to="/tasks" />
      ) : (
        <HomePresenter />
      )}
    </>
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
