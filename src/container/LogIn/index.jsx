/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

import LogInPresenter from "../../presenter/LogInPresenter";
import { TRY_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../../redux/types";

const LogIn = ({ setError, send, success, history, state }) => {
  const [user, setUser] = useState({ userID: "", password: "" });

  function onChange(event) {
    const target = event.target;
    if (target.name === "userID") {
      const value = target.value;
      setUser({ ...user, userID: value });
    }
    if (target.name === "password") {
      const value = target.value;
      setUser({ ...user, password: value });
    }
  }
  async function onClick() {
    if (user.userID === "" || user.password === "") {
      setError("아이디와 비밀번호를 입력해주시기 바랍니다");
    } else {
      setError("");
      send();
      const res = await axios.post("/api/auth/logIn", user);
      console.log(res);

      if (res.data !== "logged In successfully") {
        setError(res.data);
      } else {
        success(user.userID);
        history.push("/tasks");
      }
    }
  }
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
