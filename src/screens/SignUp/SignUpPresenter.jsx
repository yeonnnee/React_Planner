import React from "react";

import SignUpInput from "./SignUpInput";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/msg/ErrorMessage";
import { Container, Title, Wrapper, Section, Button, Error } from "./styles";

const SignUpPresenter = (signUpProps) => {
  const { state, onSubmit, onChange, onCancel } = signUpProps;
  return (
    <Container>
      <Title>Sign Up</Title>

      {state.error !== "500" && state.error !== "504" ? (
        <ErrorMessage error={state.error} />
      ) : null}
      {state.isLoading ? <Loader /> : null}

      <Wrapper>
        <SignUpInput
          type="email"
          placeholder="Email"
          id="이메일"
          onChange={onChange}
          error={state.validation.email ? true : false}
        />
        <Error>{state.validation.email}</Error>

        <SignUpInput
          type="password"
          placeholder="Password"
          id="비밀번호"
          onChange={onChange}
          error={state.validation.password ? true : false}
        />
        <Error>{state.validation.password}</Error>

        <SignUpInput
          type="password"
          placeholder="Confirm Password"
          id="비밀번호 재확인"
          onChange={onChange}
          error={state.validation.confirmPw ? true : false}
        />
        <Error>{state.validation.confirmPw}</Error>

        <SignUpInput
          type="text"
          placeholder="Name"
          id="이름"
          onChange={onChange}
          error={state.validation.name ? true : false}
        />
        <Error>{state.validation.name}</Error>
      </Wrapper>
      <Section>
        <Button onClick={onSubmit}>Submit</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Section>
    </Container>
  );
};

export default SignUpPresenter;
