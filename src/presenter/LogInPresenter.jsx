import React from "react";
import styled, { keyframes } from "styled-components";

import Header from "../components/WelcomeMessage";

const MoveDown = keyframes`
 from {
   transform: translateY(-150px);
 }
 to{
   transform: translateY(0);
 }
`;
const Container = styled.div`
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Section = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  height: 200px;
  animation: ${MoveDown} 1s linear;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Fredericka the Great", cursive;
  }
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Life Savers", cursive;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const LogInPresenter = () => {
  return (
    <Container>
      <Header />
      <Section>
        <Form>
          <Input type="text" placeholder="ID"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button>Log In</Button>
        </Form>
      </Section>
    </Container>
  );
};

export default LogInPresenter;