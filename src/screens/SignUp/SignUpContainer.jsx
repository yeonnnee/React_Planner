import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { signUpApi } from "../../api";
import SignUpPresenter from "./SignUpPresenter";
import GatewayError from "../../components/msg/GatewayError";
import ServerError from "../../components/msg/ServerError";
import {
  emailValidation,
  passwordValidation,
  confirmPw_validation,
  nameValidation,
} from "./validation";

import {
  SEND_DATA,
  SIGNUP_ERROR,
  SEND_DATA_SUCCESS,
  VALIDATION_ERROR,
  CANCEL_SIGNUP,
} from "../../redux/actions/signUpActions";

const SignUp = (signUpProps) => {
  const {
    state,
    send,
    setError,
    success,
    cancel,
    setValidationError,
    history,
  } = signUpProps;

  const [userInfo, setUserInfo] = useState({
    id: uuidv4().toString(),
    email: { id: "", domain: "" },
    password: "",
    confirmPassword: "",
    name: "",
  });

  function selectEmail(event) {
    setUserInfo({
      ...userInfo,
      email: { id: userInfo.email.id, domain: event.target.value },
    });
  }

  /* input 입력시 발생하는 함수 */
  function onChange(event) {
    const target = event.target.placeholder;

    switch (target) {
      case "Password": {
        const value = event.target.value;
        passwordValidation(value, setValidationError);
        return setUserInfo({ ...userInfo, password: value });
      }

      case "Confirm Password": {
        const value = event.target.value;
        confirmPw_validation(value, userInfo.password, setValidationError);
        return setUserInfo({
          ...userInfo,
          confirmPassword: value,
        });
      }

      case "Name": {
        const value = event.target.value;
        nameValidation(value, setValidationError);
        return setUserInfo({ ...userInfo, name: value });
      }

      case "Email": {
        const value = event.target.value;
        emailValidation(value, setValidationError);
        return setUserInfo({
          ...userInfo,
          email: { id: value, domain: userInfo.email.domain },
        });
      }
      default:
        return userInfo;
    }
  }

  /* validation error가 없을 시 발생하는 함수 */
  async function sendData() {
    send();
    try {
      const info = {
        ...userInfo,
        email: `${userInfo.email.id}@${userInfo.email.domain}`,
      };

      await signUpApi.signUp(info);

      success();
      history.push("/sign-up/success");
    } catch (error) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      const status = error.response.status;
      if (status === 400) {
        const res = error.response.data;
        switch (res.param) {
          case "email":
            return setValidationError({ email: res.msg });
          case "password":
            return setValidationError({ password: res.msg });
          case "name":
            return setValidationError({ name: res.msg });
          default:
            setError("");
        }
      } else if (status === 504) {
        setError("504");
      } else if (status === 500) {
        setError("500");
      }
    }
  }

  /* submit 버튼 눌렀을때 발생하는 함수 */
  function onSubmit(event) {
    event.preventDefault();

    if (userInfo.email.domain === "") {
      setValidationError({ email: "이메일 형식을 선택해 주십시오" });
    } else if (
      !userInfo.email.id ||
      !userInfo.name ||
      !userInfo.password ||
      !userInfo.confirmPassword
    ) {
      return setError("빈칸 없이 입력해주십시오");
    } else {
      setError("");
    }
    if (
      !state.validation.email &&
      !state.validation.password &&
      !state.validation.confirmPw &&
      !state.validation.name
    ) {
      sendData();
    }
  }

  /* cancel버튼 눌렀을 때 발생하는 함수*/
  function onCancel() {
    history.push("/");
    cancel();
  }

  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <SignUpPresenter
          onSubmit={onSubmit}
          onChange={onChange}
          onCancel={onCancel}
          selectEmail={selectEmail}
          state={state}
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
      dispatch({ type: SIGNUP_ERROR, payload: error });
    },
    success: () => {
      dispatch({ type: SEND_DATA_SUCCESS });
    },
    setValidationError: (error) => {
      dispatch({ type: VALIDATION_ERROR, payload: error });
    },
    cancel: () => {
      dispatch({ type: CANCEL_SIGNUP });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
