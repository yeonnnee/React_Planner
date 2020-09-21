import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div`
  margin: 50px 0;
`;
const List = styled.ul`
  width: 90%;
  margin: 0 20px;
  height: 30px;
  border-top: 1px solid #2c3e50;
  border-bottom: 1px solid #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Menu = styled.li`
  text-decoration: none;
  color: ${(props) => (props.current ? "#90323d" : "#4b4b4b")};
  &:hover {
    color: #90323d;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: "Zilla Slab", serif;
  /* &:nth-child(1) {
    background-color: #55828b;
  }
  &:nth-child(2) {
    background-color: #3b6064;
  }
  &:nth-child(3) {
    background-color: #364958;
  } */
`;

export default withRouter(({ location }) => (
  <>
    {(location.pathname === "/") |
    (location.pathname === "/logIn") |
    (location.pathname === "/sign-up") ? null : (
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
    )}
  </>
));
