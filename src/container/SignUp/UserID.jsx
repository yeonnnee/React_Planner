/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { SEND_DATA_FAILED, SET_USER_ID } from "../../redux/types";

import {
  Form,
  Input,
  Label,
  Error,
  Info,
} from "../../presenter/SignUpPresenter";

const UserInput = ({ state, save, setError }) => {
  function onChange(event) {
    const userID = event.target.value;
    setError("");
    save(userID);
  }

  return (
    <>
      <Form>
        <Label htmlFor="userID">아이디 :</Label>
        <Input
          type="text"
          placeholder="ID"
          value={state.user.userId}
          id="userID"
          onChange={onChange}
          error={
            state.error !== "" && state.error.includes("아이디") ? true : false
          }
        />
      </Form>
      {state.error !== "" && state.error.includes("아이디") ? (
        <Error>{state.error}</Error>
      ) : (
        <Info>* 영문 및 숫자로 조합된 6~20자</Info>
      )}
    </>
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
    setError: (text) => {
      dispatch({ type: SEND_DATA_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
