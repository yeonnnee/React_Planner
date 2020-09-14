import React from "react";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
from{
  transform: translateY(-30px);
  opacity: 0;
} to{
  transform: translateY(0);
  opacity: 1;
  }
`;

const Container = styled.div`
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: ${FadeIn} 1.5s linear;
`;
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #767c77;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #9cada4;
    color: white;
  }
`;

const Span = styled.span``;

const HomePresenter = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to Planner</Title>
        <Describe>
          Manage your plan and record your day.
          <br /> Dream, Plan, Do with our App.
        </Describe>
      </Header>
      <Section>
        <Text>Already have an account?</Text>
        <Button>Log In</Button>
      </Section>
      <Span>or</Span>
      <Section>
        <Text>create your account</Text>
        <Button>Sign Up</Button>
      </Section>
    </Container>
  );
};

export default HomePresenter;
