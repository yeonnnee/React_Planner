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
  color: ${(props) => (props.current ? "#5a2330" : "#4b4b4b")};
  &:hover {
    color: #5a2330;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: "Zilla Slab", serif;
`;

export default withRouter(({ location }) => (
  <>
    <Container>
      <List>
        <SLink to="/">
          <Menu current={location.pathname === "/"}>Tasks</Menu>
        </SLink>
        <SLink to="/monthly">
          <Menu current={location.pathname === "/monthly"}>Monthly</Menu>
        </SLink>
        <SLink to="/record">
          <Menu current={location.pathname === "/record"}>Record</Menu>
        </SLink>
      </List>
    </Container>
  </>
));
