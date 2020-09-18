/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { SET_USER_EMAIL } from "../../redux/actions";

import { Form, Input, Label } from "../../presenter/SignUpPresenter";

const UserEmail = ({ state, save }) => {
  const [email, setEmail] = useState("");

  function onChange(event) {
    const value = event.target.value;
    setEmail(value);
    save(email);
  }

  return (
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEmail);
