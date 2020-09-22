/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import SuccessMessage from "../../components/msg/SuccessMessage";
import SignUpPresenter from "../../presenter/SignUpPresenter";

import {
  SEND_DATA,
  SEND_DATA_FAILED,
  SEND_DATA_SUCCESS,
} from "../../redux/types";

const SignUp = ({ state, send, setError, success }) => {
  const [userInfo, setUserInfo] = useState({
    info: {
      userID: "",
      password: "",
      confirmPassword: "",
      name: "",
      email: "",
    },
  });
  function onChange(event) {
    const target = event.target.placeholder;
    switch (target) {
      case "ID": {
        const value = event.target.value;
        return setUserInfo({ info: { ...userInfo.info, userID: value } });
      }
      case "Password": {
        const value = event.target.value;
        return setUserInfo({ info: { ...userInfo.info, password: value } });
      }
      case "Confirm Password": {
        const value = event.target.value;
        return setUserInfo({
          info: { ...userInfo.info, confirmPassword: value },
        });
      }
      case "Name": {
        const value = event.target.value;
        return setUserInfo({ info: { ...userInfo.info, name: value } });
      }
      case "Email": {
        const value = event.target.value;
        return setUserInfo({ info: { ...userInfo.info, email: value } });
      }
      default:
        return userInfo;
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    if (
      userInfo.info.userID === "" ||
      userInfo.info.password === "" ||
      userInfo.info.confirmPassword === "" ||
      userInfo.info.name === "" ||
      userInfo.info.email === ""
    ) {
      setError("빈칸 없이 입력해주시기 바랍니다");
    } else {
      send();
      const res = await axios.post("/api/user/signUp", userInfo.info);
      console.log(res);

      if (res.data !== "Get data successfully") {
        setError(res.data.msg);
      } else {
        success();
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
