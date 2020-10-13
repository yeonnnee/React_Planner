import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { LOG_OUT, LOG_OUT_FAILED } from "../redux/types";
import { authApi } from "../api";

const Container = styled.div`
  width: 100%;
  position: relative;
  top: -28px;
  height: 30px;
  display: flex;
  background-color: #c2b0ae;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 2px 0 5px #baa7a1, -2px 0 5px #baa7a1, inset -2px -2px 2px #baa7a1,
    inset 2px -2px 5px #baa7a1;
`;
const List = styled.ul`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UserSection = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
`;
const Menu = styled.li`
  text-decoration: none;
  color: ${(props) => (props.current ? "#4d3e3e" : "#835858")};
  &:hover {
    color: #4d3e3e;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: "Zilla Slab", serif;
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
const Title = styled.div`
  height: 30px;
  font-family: "Sacramento", cursive;
  position: relative;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
const User = styled.span`
  cursor: pointer;
  margin-right: 10px;
`;

const Header = withRouter((headerProps) => {
  const { state, logOut, location } = headerProps;
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
        <>
          <Title>{state.user}`s Planner</Title>
          <Container>
            <List>
              <SLink to="/tasks">
                <Menu current={location.pathname === "/tasks"}>Tasks</Menu>
              </SLink>
              <SLink to="/monthly">
                <Menu current={location.pathname === "/monthly"}>Monthly</Menu>
              </SLink>
              <SLink to="/record">
                <Menu current={location.pathname === "/record"}>Record</Menu>
              </SLink>
            </List>
          </Container>
          <UserSection>
            <User>{state.user}</User>
            <Button onClick={onClick}>로그아웃</Button>
          </UserSection>
        </>
      ) : null}
    </>
  );
});

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
