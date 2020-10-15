import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

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
  const { state, location } = headerProps;
  const owner = state.user.split("@")[0];

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

export default connect(mapStateToProps)(Header);
