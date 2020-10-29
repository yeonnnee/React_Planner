import React, { useState } from "react";

import { connect } from "react-redux";

import DeleteAccountPresenter from "./DeletAccountPresenter";
import { accountApi } from "../../../api";
import ServerError from "../../../components/msg/ServerError";
import GatewayError from "../../../components/msg/GatewayError";
import {
  LOADING,
  LOG_OUT,
  RESET_VERIFICATION_RECORD,
} from "../../../redux/types";

const DeleteAccount = (deleteAccountProps) => {
  const {
    state,
    user,
    logOut,
    sendData,
    deleted,
    setError,
  } = deleteAccountProps;
  const [value, setValue] = useState({ password: "", error: "" });
  const [optionVal, setOptionVal] = useState({ reason: "", error: "" });

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
  const onSelect = (event) => {
    setOptionVal({ reason: event.target.value, error: "" });
  };

  const deleteAccount = async () => {
    try {
      sendData();
      const data = { password: value.password, reason: optionVal.reason };
      await accountApi.deleteAccount(data);
      deleted();
      logOut();
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        setValue({ ...value, error: error.response.data.msg });
      } else if (status === 500) {
        setError("500");
      } else if (status === 504) {
        setError("504");
      } else {
        return;
      }
    }
  };

  const onClick = () => {
    if (!value.password) {
      setValue({ password: "", error: "비밀번호를 입력해주십시오" });
    } else if (!optionVal.reason) {
      setOptionVal({ reason: "", error: "계정 삭제 사유를 선택해 주십시오" });
    } else if (value.password && !value.error && optionVal) {
      deleteAccount();
    }
  };
  return (
    <>
      {state.error === "500" ? (
        <ServerError />
      ) : state.error === "504" ? (
        <GatewayError />
      ) : (
        <DeleteAccountPresenter
          {...user}
          {...state}
          onChange={onChange}
          onSelect={onSelect}
          onClick={onClick}
          passwordError={value.error}
          error={optionVal.error}
        />
      )}
    </>
  );
};
function mapStateToProps(state) {
  return { state: state.accountReducer, user: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    sendData: () => {
      return dispatch({ type: LOADING });
    },
    deleted: () => {
      return dispatch({ type: RESET_VERIFICATION_RECORD });
    },
    logOut: () => {
      return dispatch({ type: LOG_OUT });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
