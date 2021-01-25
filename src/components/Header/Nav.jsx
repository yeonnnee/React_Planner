import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { SLink } from "./Header.styles";

const Container = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  border-radius: 10px;
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
  font-weight: bold;
  font-family: "Zilla Slab", serif;
  color: ${(props) => (props.current ? "#4d3e3e" : "#835858")};
  &:hover {
    color: #4d3e3e;
  }
`;

const Nav = withRouter((headerProps) => {
  const { state, location } = headerProps;

  return (
    <>
      {state.isAuthenticated ? (
        <>
          <Container>
            <List>
              <SLink to="/tasks">
                <Menu current={location.pathname === "/tasks"}>Tasks</Menu>
              </SLink>
              <SLink to="/monthly">
                <Menu current={location.pathname === "/monthly"}>Monthly</Menu>
              </SLink>
              <SLink to="/challenge">
                <Menu current={location.pathname === "/challenge"}>
                  Challenge
                </Menu>
              </SLink>
              <SLink to="/account">
                <Menu current={location.pathname === "/account"}>Account</Menu>
              </SLink>
            </List>
          </Container>
        </>
      ) : null}
    </>
  );
});

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(Nav);
