/* eslint-disable react/prop-types */
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

const SignUpPresenter = ({
  error,
  isLoading,
  onSubmit,
  onChange,
  email,
  password,
  confirmPassword,
  name,
}) => {
  return (
    <Container>
      <Title>Sign Up</Title>

      {error.includes("빈칸") ? <ErrorMessage error={error} /> : null}
      {isLoading ? <Loader /> : null}

      <Wrapper>
        <SignUpInput
          type="email"
          placeholder="Email"
          value={email}
          id="이메일"
          onChange={onChange}
          error={error.includes("이메일") ? true : false}
          errorMessage={error}
        />
        <SignUpInput
          type="password"
          placeholder="Password"
          value={password}
          id="비밀번호"
          onChange={onChange}
          error={error !== "" && error.includes("비밀번호") ? true : false}
          errorMessage={error}
        />
        <SignUpInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          id="비밀번호 재확인"
          onChange={onChange}
          error={error.includes("일치") ? true : false}
          errorMessage={error}
        />
        <SignUpInput
          type="text"
          placeholder="Name"
          value={name}
          id="이름"
          onChange={onChange}
          error={
            error === "글자 수를 초과하였습니다." ||
            error.includes("한글") ||
            error === "유효하지 않은 글자가 포함되어 있습니다."
              ? true
              : false
          }
          errorMessage={error}
        />
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
