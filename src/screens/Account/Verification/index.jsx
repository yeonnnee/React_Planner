import React, { useState } from "react";
import { connect } from "react-redux";

import { accountApi } from "../../../api";
import GatewayError from "../../../components/msg/GatewayError";
import ServerError from "../../../components/msg/ServerError";
import VerificationPresenter from "./VerificationPresenter";
import {
  CHECK_VERIFICATION,
  LOADING,
  RESET_VERIFICATION_RECORD,
  ACCOUNT_ERROR,
} from "../../../redux/actions/accountActions";

const UserVerification = (UserVerificationProps) => {
  const {
    user,
    state,
    comparePw,
    success,
    failed,
    setError,
  } = UserVerificationProps;
  const [value, setValue] = useState({ password: "", error: "" });

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    if (value.length > 16) {
      setValue({
        password: value,
        error: "비밀번호는 8~16자리로 입력해주십시오",
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
      const status = error.response.status;
      if (status === 400) {
        setValue({ ...state, error: error.response.data.msg });
      } else if (status === 504) {
        setError("504");
      } else if (status === 500) {
        setError("500");
      } else {
        return;
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
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <VerificationPresenter
          onClick={onClick}
          onChange={onChange}
          user={user}
          state={state}
          value={value}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.accountReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    comparePw: () => {
      dispatch({ type: LOADING });
    },
    success: () => {
      dispatch({ type: CHECK_VERIFICATION });
    },
    failed: () => {
      dispatch({ type: RESET_VERIFICATION_RECORD });
    },
    setError: (error) => {
      dispatch({ type: ACCOUNT_ERROR, payload: error });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserVerification);
