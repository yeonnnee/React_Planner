import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { LOG_OUT, LOG_OUT_FAILED } from "../redux/types";
import { authApi } from "../api";

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  outline: none;
  font-family: "Life Savers", cursive;
  border: 1px solid #30475e;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
const User = styled.span`
  cursor: pointer;
  margin-right: 10px;
`;

const Header = (headerProps) => {
  const { state, logOut } = headerProps;
  async function onClick() {
    try {
      await authApi.logOut();
      logOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {state.isAuthenticated ? (
        <Container>
          <User>{state.user}</User>
          <Button onClick={onClick}>로그아웃</Button>
        </Container>
      ) : null}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch({ type: LOG_OUT });
    },
    setError: (error) => {
      dispatch({ type: LOG_OUT_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
