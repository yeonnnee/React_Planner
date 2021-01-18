import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  background-color: black;
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
  font-weight: bold;
  font-family: "Zilla Slab", serif;
  color: ${(props) => (props.current ? "#4d3e3e" : "#835858")};
  &:hover {
    color: #4d3e3e;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
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
