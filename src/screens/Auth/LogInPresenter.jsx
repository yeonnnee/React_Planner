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
  const { onChange, onClick, state, user } = logInProps;
  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          {state.isLoading ? <Loader /> : null}
          {user.error ? <ErrorMessage error={user.error} /> : null}

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
              autoComplete="off"
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
