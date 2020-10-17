import React, { useState } from "react";
import { connect } from "react-redux";

import { accountApi } from "../../../api";
import {
  CHECK_VERIFICATION_FAILED,
  CHECK_VERIFICATION,
  CHECK_VERIFICATION_SUCCESS,
} from "../../../redux/types";
import VerificationPresenter from "./VerificationPresenter";

const UserVerification = (UserVerificationProps) => {
  const { user, state, comparePw, success, failed } = UserVerificationProps;
  const [value, setValue] = useState({ password: "", error: "" });

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    if (value.length > 12) {
      setValue({
        password: value,
        error: "비밀번호는 8~12자리로 입력해주십시오",
      });
    } else {
      setValue({ password: value, error: "" });
    }
  };
  async function checkPw() {
    try {
      comparePw();
      await accountApi.verification({ password: value.password });
      success();
    } catch (error) {
      failed();
      console.log("error", error.response);
      if (error.response.status === 400) {
        setValue({ ...state, error: error.response.data.msg });
      }
    }
  }
  const onClick = () => {
    if (value.password === "") {
      setValue({ ...value, error: "비밀번호를 입력해주시기 바랍니다" });
    } else {
      setValue({ ...value, error: "" });
      checkPw();
    }
  };

  return (
    <VerificationPresenter
      onClick={onClick}
      onChange={onChange}
      user={user}
      state={state}
      value={value}
    />
  );
};

function mapStateToProps(state) {
  return { state: state.accountReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    comparePw: () => {
      dispatch({ type: CHECK_VERIFICATION });
    },
    success: () => {
      dispatch({ type: CHECK_VERIFICATION_SUCCESS });
    },
    failed: () => {
      dispatch({ type: CHECK_VERIFICATION_FAILED });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserVerification);
