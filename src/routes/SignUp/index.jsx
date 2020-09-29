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
  CANCEL_SIGNUP,
} from "../../redux/types";

const SignUp = (signUpProps) => {
  const {
    state,
    send,
    failed,
    success,
    cancel,
    setError,
    history,
  } = signUpProps;

  const [userInfo, setUserInfo] = useState({
    id: uuidv4().toString(),
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  /* input 입력시 발생하는 함수 */
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

  /* validation error가 없을 시 발생하는 함수 */
  async function sendData() {
    try {
      send();
      await axios.post("/api/user/signUp", userInfo);

      success();
      history.push("/sign-up/success");
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
              failed(res.msg);
          }
        } else {
          console.log(error.response.status);
        }
      }
    }
  }

  /* submit 버튼 눌렀을때 발생하는 함수 */
  function onSubmit(event) {
    event.preventDefault();

    if (
      userInfo.email === "" ||
      userInfo.name === "" ||
      userInfo.password === "" ||
      userInfo.confirmPassword === ""
    ) {
      return failed("빈칸 없이 입력해주십시오");
    } else {
      failed("");
    }
    if (
      state.validation.email === "" &&
      state.validation.password === "" &&
      state.validation.confirmPw === "" &&
      state.validation.name === ""
    ) {
      sendData();
    }
  }
  /* cancel버튼 눌렀을 때 발생하는 함수*/
  function onCancel() {
    cancel();
  }

  return (
    <SignUpPresenter
      onSubmit={onSubmit}
      onChange={onChange}
      onCancel={onCancel}
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
    cancel: () => {
      dispatch({ type: CANCEL_SIGNUP });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
