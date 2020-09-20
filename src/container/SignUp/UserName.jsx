/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { SEND_DATA_FAILED, SET_USER_NAME } from "../../redux/types";

import { Form, Input, Label, Error } from "../../presenter/SignUpPresenter";

const UserName = ({ state, save, setError }) => {
  function onChange(event) {
    const name = event.target.value;
    setError("");
    save(name);
  }

  return (
    <>
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
      {state.error === "글자 수가 초과하였습니다." ||
      state.error.includes("한글") ||
      state.error === "유효하지 않은 글자가 포함되어 있습니다." ? (
        <Error>{state.error}</Error>
      ) : null}
    </>
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
    setError: (text) => {
      dispatch({ type: SEND_DATA_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserName);
