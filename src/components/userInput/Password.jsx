/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { SET_USER_PASSWORD } from "../../redux/actions";

import { Form, Input, Label } from "../../presenter/SignUpPresenter";

const UserPassword = ({ state, save }) => {
  const [password, setPassword] = useState("");

  function onChange(event) {
    const value = event.target.value;
    setPassword(value);
    save(password);
  }

  return (
    <Form>
      <Label htmlFor="password">비밀번호 :</Label>
      <Input
        type="text"
        placeholder="Password"
        value={password}
        id="passowrd"
        onChange={onChange}
        error={
          state.error !== "" && state.error.includes("비밀번호") ? true : false
        }
      />
    </Form>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPassword);
