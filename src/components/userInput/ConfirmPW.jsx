/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { SET_USER_CONFIRMPW } from "../../redux/actions";

import { Form, Input, Label } from "../../presenter/SignUpPresenter";

const ConfirmPassword = ({ state, save }) => {
  const [confirmPassword, setConfirmPassword] = useState("");

  function onChange(event) {
    const value = event.target.value;
    setConfirmPassword(value);
    save(confirmPassword);
  }

  return (
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPassword);
