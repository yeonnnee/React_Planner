import React from "react";

import Loader from "../../components/Loader";
import Header from "../../components/msg/WelcomeMessage";
import ErrorMessage from "../../components/msg/ErrorMessage";
import {
  PasswordLink,
  SignUpLink,
  Form,
  Input,
  Container,
  Wrapper,
  Section,
  Button,
} from "./styles";

const LogInPresenter = (logInProps) => {
  const { onChange, onClick, isLoading, error } = logInProps;
  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          {isLoading ? <Loader /> : null}
          {error.msg ? <ErrorMessage error={error.msg} /> : null}

          <Form>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
          </Form>
          <Form>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </Form>
          <PasswordLink to="/find-password">Forgot password?</PasswordLink>
        </Wrapper>
        <Section>
          <Button onClick={onClick}>로그인</Button>
        </Section>
        <SignUpLink to="/sign-up">Create Planner Account</SignUpLink>
      </Container>
    </>
  );
};

export default LogInPresenter;
