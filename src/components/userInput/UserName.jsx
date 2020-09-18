/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { SET_USER_NAME } from "../../redux/actions";

import { Form, Input, Label } from "../../presenter/SignUpPresenter";

const UserName = ({ state, save }) => {
  const [name, setName] = useState("");

  function onChange(event) {
    const value = event.target.value;
    setName(value);
    save(name);
  }

  return (
    <Form>
      <Label htmlFor="name">이름 :</Label>
      <Input
        type="text"
        placeholder="Name"
        value={state.user.name}
        id="name"
        onChange={onChange}
        error={
          state.error === "글자 수가 초과하였습니다." ||
          state.error.includes("한글") ||
          state.error === "유효하지 않은 글자가 포함되어 있습니다."
            ? true
            : false
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
    save: (name) => {
      dispatch({ type: SET_USER_NAME, payload: name });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserName);
