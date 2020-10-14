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

const UserSection = styled.div`
  width: 300px;
  height: 300px;
  padding: 10px;
  position: absolute;
  border-radius: 10px;
  right: 20px;
  top: 80px;
  background-color: #e2e0dc;
  box-shadow: 5px 5px 15px #baa7a1, 5px 5px 10px #baa7a1,
    inset -5px -5px 15px #baa7a1, inset 1px 1px 5px #baa7a1;
  border-radius: 5px;
  display: none;
  &:hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }
`;
const DropDownList = styled.button`
  width: 90%;
  height: 50px;
  border-top: 1px solid #baa7a1;
  border-bottom: 1px solid #baa7a1;
  border-left: none;
  border-right: none;
  outline: none;
  &:hover {
    background-color: #ffff;
  }
`;

const LogOutBtn = styled.button`
  width: 90%;
  height: 50px;
  outline: none;
  border-bottom: 1px solid #baa7a1;
  border-left: none;
  border-right: none;
  border-top: none;
  &:hover {
    background-color: #ffff;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  outline: none;
  font-family: "Life Savers", cursive;
  font-size: 15px;
  border: 1px solid #30475e;
  &:hover {
    background-color: #30475e;
    color: white;
  }
  &:focus ~ ${UserSection} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Pic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-top: 10px;
  box-shadow: 5px 5px 15px #baa7a1, 5px 5px 10px #baa7a1,
    inset -5px -5px 15px #baa7a1, inset 1px 1px 5px #baa7a1;
  background-color: wheat;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Info = styled.div`
  margin-bottom: 8px;
  &:nth-child(2) {
    font-size: 12px;
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

const Header = withRouter((headerProps) => {
  const { state, logOut, location } = headerProps;
  const owner = state.user.split("@")[0];

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
          <Title>{owner}`s Planner</Title>
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
          <Button>{state.name}</Button>
          <UserSection>
            <Pic></Pic>
            <User>
              <Info>{state.name}</Info>
              <Info>{state.user}</Info>
            </User>
            <DropDownList>계정관리</DropDownList>
            <LogOutBtn onClick={onClick}>로그아웃</LogOutBtn>
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
