import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import SignUpPresenter from "./SignUpPresenter";
import {
  emailValidation,
  passwordValidation,
  confirmPw_validation,
  nameValidation,
} from "./validation";

import {
  SEND_DATA,
  SEND_DATA_FAILED,
  SEND_DATA_SUCCESS,
  VALIDATION_ERROR,
} from "../../redux/types";

const SignUp = (signUpProps) => {
  const { state, send, failed, success, setError, history } = signUpProps;

  const [userInfo, setUserInfo] = useState({
    id: uuidv4().toString(),
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
        return setUserInfo({
          ...userInfo,
          email: value,
        });
      }
      default:
        return userInfo;
    }
  }
  async function sendData() {
    try {
      send();
      const res = await axios.post("/api/user/signUp", userInfo);
      const result = res.data.msg;

      if (result === "Get data successfully") {
        success();
        history.push("/sign-up/success");
      }
    } catch (error) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      if (error) {
        if (error.response.status === 400) {
          const res = error.response.data;
          switch (res.param) {
            case "email":
              return setError({ email: res.msg });
            case "password":
              return setError({ password: res.msg });
            case "name":
              return setError({ name: res.msg });
            default:
              failed();
          }
        } else {
          console.log(error.response.status);
        }
      }
    }
  }
  function onSubmit(event) {
    event.preventDefault();

    if (
      userInfo.email ||
      userInfo.name ||
      userInfo.password ||
      userInfo.confirmPassword === ""
    ) {
      return failed("빈칸 없이 입력해주십시오");
    } else {
      failed("");
    }
    if (
      state.validation.email ||
      state.validation.pw ||
      state.validation.confirmPw ||
      state.validation.name === ""
    ) {
      sendData();
    }
  }

  return (
    <SignUpPresenter
      onSubmit={onSubmit}
      onChange={onChange}
      userInfo={userInfo}
      {...state}
    />
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
    failed: (error) => {
      dispatch({ type: SEND_DATA_FAILED, payload: error });
    },
    success: () => {
      dispatch({ type: SEND_DATA_SUCCESS });
    },
    setError: (error) => {
      dispatch({ type: VALIDATION_ERROR, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);