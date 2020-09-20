/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { SEND_DATA_FAILED, SET_USER_EMAIL } from "../../redux/types";

import { Form, Input, Label, Error } from "../../presenter/SignUpPresenter";

const UserEmail = ({ state, save, setError }) => {
  function onChange(event) {
    const email = event.target.value;
    setError("");
    save(email);
  }

  return (
    <>
      <Form>
        <Label htmlFor="email">이메일 :</Label>
        <Input
          type="email"
          placeholder="Email"
          value={state.user.email}
          id="email"
          onChange={onChange}
          error={state.error.includes("이메일") ? true : false}
        />
      </Form>
      {state.error.includes("이메일") ? <Error>{state.error}</Error> : null}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.userReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    save: (email) => {
      dispatch({ type: SET_USER_EMAIL, payload: email });
    },
    setError: (text) => {
      dispatch({ type: SEND_DATA_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEmail);
