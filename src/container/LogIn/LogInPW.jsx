/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { LOGIN_FAILED, SET_LOGIN_PASSWORD } from "../../redux/types";
import { Form, Input } from "./LogID";

const LogInPW = ({ state, save, setError }) => {
  function onChange(event) {
    const password = event.target.value;
    setError("");
    save(password);
  }
  return (
    <Form>
      <Input
        type="password"
        placeholder="Password"
        value={state.user.password}
        onChange={onChange}
      />
    </Form>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    save: (password) => {
      dispatch({ type: SET_LOGIN_PASSWORD, payload: password });
    },
    setError: (text) => {
      dispatch({ type: LOGIN_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPW);
