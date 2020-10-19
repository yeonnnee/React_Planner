import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { authApi } from "../../api";
import HomePresenter from "./HomePresenter";
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  RESET_VERIFICATION_RECORD,
} from "../../redux/types";
import GatewayError from "../../components/msg/GatewayError";
import ServerError from "../../components/msg/ServerError";

const Home = (homeProps) => {
  const { state, setError, success, resetRecord } = homeProps;

  // 페이지 render시 실행되는 함수
  async function checkAuth() {
    try {
      const res = await authApi.checkAuth();
      const user = await res.data.user;
      success({ user: user.email, name: user.name });
    } catch (error) {
      const status = error.response.status;

      if (status === 401) {
        setError({ status: status, msg: "" });
      } else if (status === 400) {
        setError(error.response.data.msg);
      } else if (status === 504) {
        setError({ status: status, msg: "" });
      } else if (status === 500) {
        setError({ status: status, msg: "" });
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
      ) : state.error.status === 500 ? (
        <ServerError />
      ) : state.error.status === 504 ? (
        <GatewayError />
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
