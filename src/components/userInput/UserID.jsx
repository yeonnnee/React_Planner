/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { SET_USER_ID } from "../../redux/actions";

import { Form, Input, Label } from "../../presenter/SignUpPresenter";

const UserInput = ({ state, save }) => {
  const [userId, setUserId] = useState("");

  function onChange(event) {
    const value = event.target.value;
    setUserId(value);
    save(userId);
  }

  return (
    <Form>
      <Label htmlFor="userID">아이디 :</Label>
      <Input
        type="text"
        placeholder="ID"
        value={userId}
        id="userID"
        onChange={onChange}
        error={
          state.error !== "" && state.error.includes("아이디") ? true : false
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
    save: (userID) => {
      dispatch({ type: SET_USER_ID, payload: userID });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
