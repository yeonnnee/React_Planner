import React from "react";

import Nav from "./Nav";
import { Container, Title, Describe, SLink } from "./Header.styles";

const Header = () => {
  return (
    <>
      <SLink to="/">
        <Container>
          <Title>Welcome to Y Planner</Title>
          <Describe>
            Manage your plan and record your day.
            <br /> Dream, Plan, Do with our App.
          </Describe>
        </Container>
      </SLink>
      <Nav />
    </>
  );
};

export default Header;
