import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 80%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #382933;
`;
const Title = styled.div`
  font-size: 30px;
`;
const Describe = styled.div`
  font-size: 13px;
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
`;

const WelcomeMessage = () => {
  return (
    <Header>
      <Title>Welcome to Planner</Title>
      <Describe>
        Manage your plan and record your day.
        <br /> Dream, Plan, Do with our App.
      </Describe>
    </Header>
  );
};

export default WelcomeMessage;
