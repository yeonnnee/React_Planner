import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import Button from "../components/SubmitBtn";

const MoveDown = keyframes`
 from {
   transform: translateY(-250px);
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

const Title = styled.span`
  font-size: 25px;
  /* font-family: "Fredericka the Great", cursive; */
  font-family: "Cinzel Decorative", cursive;
`;

const Form = styled.form`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  animation: ${MoveDown} 1s linear;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
`;
const Section = styled.div`
  display: flex;
  animation: ${MoveDown} 1s linear;
`;
const Info = styled.div`
  font-size: 11px;
  position: relative;
  top: -10px;
`;
const CancelBtn = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-family: "Fredericka the Great", cursive;

  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;

const SignUpPresenter = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <Wrapper>
        <Form>
          <Input type="text" placeholder="ID" />
          <Input type="password" placeholder="Password" />
          <Info>* 영문 대소문자, 숫자, 특수문자를 포함한 10자리 이상</Info>
          <Input type="password" placeholder="Confirm Password" />
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </Form>
      </Wrapper>
      <Section>
        <Button />
        <SLink to="/">
          <CancelBtn>Cancel</CancelBtn>
        </SLink>
      </Section>
    </Container>
  );
};

export default SignUpPresenter;
