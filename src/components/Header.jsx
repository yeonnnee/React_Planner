/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { LOG_OUT, LOG_OUT_FAILED } from "../redux/types";

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
// const User = styled.span`
//   cursor: pointer;
//   margin-right: 10px;
// `;

const Header = ({ state, setError, logOut }) => {
  async function onClick() {
    const res = await axios.post("/api/auth/logOut");
    if (res.data === "User logged out") {
      logOut();
    } else {
      setError(res.data);
    }
  }
  return (
    <>
      {state.isAuthenticated ? (
        <Container>
          {/* <User>{state.user.userID}</User> */}
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
