/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { SEND_DATA_FAILED, SET_USER_ID } from "../../redux/actions";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  height: 200px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
`;

const LogInID = ({ state, save, setError }) => {
  function onChange(event) {
    const userID = event.target.value;
    setError("");
    save(userID);
  }
  return (
    <Form>
      <Input
        type="text"
        placeholder="ID"
        value={state.user.userID}
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
    save: (userID) => {
      dispatch({ type: SET_USER_ID, payload: userID });
    },
    setError: (text) => {
      dispatch({ type: SEND_DATA_FAILED, payload: text });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInID);
