import React from "react";
import styled from "styled-components";

import Nav from "./Nav";

const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #382933;

  @media only screen and (max-width: 640px) {
    width: 90%;
    padding: 0;
    padding-bottom: 20px;
  }
`;
const Title = styled.div`
  font-family: "Cinzel Decorative", cursive;
  font-size: 25px;

  @media only screen and (max-width: 640px) {
    font-size: 23px;
  }
`;
const Describe = styled.div`
  font-size: 13px;
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
`;

const Section = styled.div``;

const Header = () => {
  return (
    <>
      <Container>
        <Section>
          <Title>Welcome to Y Planner</Title>
          <Describe>
            Manage your plan and record your day.
            <br /> Dream, Plan, Do with our App.
          </Describe>
        </Section>
      </Container>
      <Nav />
    </>
  );
};

export default Header;
