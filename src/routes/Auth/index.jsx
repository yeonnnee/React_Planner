/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

import LogInPresenter from "../../presenter/LogInPresenter";
import { TRY_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../../redux/types";

const LogIn = ({ setError, send, success, state }) => {
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
  async function onClick() {
    if (user.email === "" || user.password === "") {
      setError("아이디와 비밀번호를 입력해주시기 바랍니다");
    } else if (user.password.length > 12) {
      setError("비밀번호는 8~12자리로 입력해주십시오");
    } else if (!user.email.includes("@")) {
      setError("유효하지 않은 이메일입니다");
    } else {
      setError("");
      send();
    }
    const res = await axios.post("/api/auth/logIn", user);
    console.log(res);

    if (res.data.msg !== "logged In successfully") {
      setError(res.data.msg);
    } else {
      success(user.email.split("@"));
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
