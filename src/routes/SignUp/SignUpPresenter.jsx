import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import SignUpInput from "./SignUpInput";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/msg/ErrorMessage";

const FadeIn = keyframes`
 from {
   opacity:0
 }
 to{
  opacity:1
 }
`;

export const Container = styled.div`
  height: 80%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: "Cinzel Decorative", cursive;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  margin: 20px;
  height: 300px;
  width: 100%;
  animation: ${FadeIn} 1s linear;
`;
export const Section = styled.div`
  display: flex;
  font-family: "Life Savers", cursive;
`;
export const Button = styled.div`
  width: 150px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;
const Error = styled.span`
  position: relative;
  top: -12px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: red;
  line-height: 1.5;
`;

const SignUpPresenter = (signUpProps) => {
  const {
    error,
    validation,
    isLoading,
    onSubmit,
    onChange,
    userInfo,
  } = signUpProps;
  return (
    <Container>
      <Title>Sign Up</Title>

      {error !== "" ? <ErrorMessage error={error} /> : null}
      {isLoading ? <Loader /> : null}

      <Wrapper>
        <SignUpInput
          type="email"
          placeholder="Email"
          value={userInfo.email}
          id="이메일"
          onChange={onChange}
          error={validation.email !== "" ? true : false}
        />
        <Error>{validation.email}</Error>

        <SignUpInput
          type="password"
          placeholder="Password"
          value={userInfo.password}
          id="비밀번호"
          onChange={onChange}
          error={validation.password !== "" ? true : false}
        />
        <Error>{validation.password}</Error>

        <SignUpInput
          type="password"
          placeholder="Confirm Password"
          value={userInfo.confirmPassword}
          id="비밀번호 재확인"
          onChange={onChange}
          error={validation.confirmPw !== "" ? true : false}
        />
        <Error>{validation.confirmPw}</Error>

        <SignUpInput
          type="text"
          placeholder="Name"
          value={userInfo.name}
          id="이름"
          onChange={onChange}
          error={validation.name !== "" ? true : false}
        />
        <Error>{validation.name}</Error>
      </Wrapper>
      <Section>
        <Button onClick={onSubmit}>Submit</Button>
        <SLink to="/">
          <Button>Cancel</Button>
        </SLink>
      </Section>
    </Container>
  );
};

export default SignUpPresenter;
