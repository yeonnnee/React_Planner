/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { SEND_DATA_FAILED, SET_USER_CONFIRMPW } from "../../redux/types";

import { Form, Input, Label, Error } from "../../presenter/SignUpPresenter";

const ConfirmPassword = ({ state, save, setError }) => {
  function onChange(event) {
    const confirmPassword = event.target.value;
    setError("");
    save(confirmPassword);
  }

  return (
    <>
      <Form>
        <Label htmlFor="confirmPassword">비밀번호 확인 :</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          value={state.user.confirmPassword}
          autocomplete="off"
          id="confirmPassword"
          onChange={onChange}
          error={state.error.includes("일치") ? true : false}
        />
      </Form>
      {state.error.includes("일치") ? <Error>{state.error}</Error> : null}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.userReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    save: (confirmPassword) => {
      dispatch({ type: SET_USER_CONFIRMPW, payload: confirmPassword });
    },
    setError: (text) => {
      dispatch({ type: SEND_DATA_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword);
