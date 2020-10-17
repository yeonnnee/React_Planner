import React, { useState } from "react";

import { connect } from "react-redux";

import DeleteAccountPresenter from "./DeletAccountPresenter";
import { accountApi } from "../../../api";
import { DELETE_ACCOUNT, DELETE_ACCOUNT_SUCCESS } from "../../../redux/types";

const DeleteAccount = (deleteAccountProps) => {
  const { state, user, history, sendData, deleted } = deleteAccountProps;
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
      history.push("/");
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        setValue({ ...value, error: error.response.data.msg });
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
    <DeleteAccountPresenter
      {...user}
      {...state}
      onChange={onChange}
      onSelect={onSelect}
      onClick={onClick}
      passwordError={value.error}
      error={optionVal.error}
    />
  );
};
function mapStateToProps(state) {
  return { state: state.accountReducer, user: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    sendData: () => {
      return dispatch({ type: DELETE_ACCOUNT });
    },
    deleted: () => {
      return dispatch({ type: DELETE_ACCOUNT_SUCCESS });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
