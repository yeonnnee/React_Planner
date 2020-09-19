/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { SEND_DATA_FAILED, SET_USER_PASSWORD } from "../../redux/actions";
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPW);
