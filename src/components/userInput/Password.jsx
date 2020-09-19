/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { SEND_DATA_FAILED, SET_USER_PASSWORD } from "../../redux/actions";

import {
  Form,
  Input,
  Label,
  Error,
  Info,
} from "../../presenter/SignUpPresenter";

const UserPassword = ({ state, save, setError }) => {
  function onChange(event) {
    const password = event.target.value;
    setError("");
    save(password);
  }

  return (
    <>
      <Form>
        <Label htmlFor="password">비밀번호 :</Label>
        <Input
          type="password"
          placeholder="Password"
          value={state.user.password}
          id="passowrd"
          onChange={onChange}
          error={
            state.error !== "" && state.error.includes("비밀번호")
              ? true
              : false
          }
        />
      </Form>
      {state.error !== "" && state.error.includes("비밀번호") ? (
        <Error>{state.error}</Error>
      ) : (
        <Info>* 영문 대소문자, 숫자, 특수문자를 포함한 8~20자</Info>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.userReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    save: (password) => {
      dispatch({ type: SET_USER_PASSWORD, payload: password });
    },
    setError: (text) => {
      dispatch({ type: SEND_DATA_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPassword);
