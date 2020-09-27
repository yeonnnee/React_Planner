/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import SuccessMessage from "../../components/msg/SuccessMessage";
import SignUpPresenter from "../../presenter/SignUpPresenter";
import {
  emailValidation,
  passwordValidation,
  confirmPw_validation,
  nameValidation,
  validation,
} from "./validation";

import {
  SEND_DATA,
  SEND_DATA_FAILED,
  SEND_DATA_SUCCESS,
} from "../../redux/types";

const SignUp = ({ state, send, setError, success }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  function onChange(event) {
    const target = event.target.placeholder;
    switch (target) {
      case "Password": {
        const value = event.target.value;
        passwordValidation(value, setError);
        return setUserInfo({ ...userInfo, password: value });
      }
      case "Confirm Password": {
        const value = event.target.value;
        confirmPw_validation(value, userInfo.password, setError);
        return setUserInfo({
          ...userInfo,
          confirmPassword: value,
        });
      }
      case "Name": {
        const value = event.target.value;
        nameValidation(value, setError);
        return setUserInfo({ ...userInfo, name: value });
      }
      case "Email": {
        const value = event.target.value;
        emailValidation(value, setError);
        return setUserInfo({ ...userInfo, email: value });
      }
      default:
        return userInfo;
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    try {
      validation(
        userInfo.email,
        userInfo.password,
        userInfo.confirmPassword,
        userInfo.name,
        setError
      );
      send();
      const res = await axios.post("/api/user/signUp", userInfo);
      const result = res.data.msg;
      if (result === "Get data successfully") {
        success();
      }
    } catch (error) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      if (error) {
        const res = error.response.data.msg;
        setError(res);
      }
    }
  }

  return (
    <>
      {state.result === "SUCCESS" ? (
        <SuccessMessage />
      ) : (
        <SignUpPresenter
          onSubmit={onSubmit}
          onChange={onChange}
          {...state}
          {...userInfo}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.userReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    send: () => {
      dispatch({ type: SEND_DATA });
    },
    setError: (error) => {
      dispatch({ type: SEND_DATA_FAILED, payload: error });
    },
    success: () => {
      dispatch({ type: SEND_DATA_SUCCESS });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
