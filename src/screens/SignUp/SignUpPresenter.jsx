import React from "react";

import SignUpInput from "./SignUpInput";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/msg/ErrorMessage";
import {
  Container,
  Title,
  Wrapper,
  Section,
  Button,
  SLink,
  Error,
} from "./styles";

const SignUpPresenter = (signUpProps) => {
  const {
    error,
    validation,
    isLoading,
    onSubmit,
    onChange,
    onCancel,
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
          <Button onClick={onCancel}>Cancel</Button>
        </SLink>
      </Section>
    </Container>
  );
};

export default SignUpPresenter;
