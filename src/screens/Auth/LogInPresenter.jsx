import React from "react";
import styled from "styled-components";

import Loader from "../../components/Loader";
import Header from "../../components/msg/WelcomeMessage";
import ErrorMessage from "../../components/msg/ErrorMessage";

export const Container = styled.div`
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = styled.div`
  margin-top: 100px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 200px;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
  &:focus {
    border: 1px solid #baa7a1;
  }
`;
export const Button = styled.div`
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
  &:focus {
    border: 1px solid #baa7a1;
  }
`;

const LogInPresenter = (logInProps) => {
  const { onChange, onClick, isLoading, error, email, password } = logInProps;
  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          {isLoading ? <Loader /> : null}
          {error !== "" ? <ErrorMessage error={error} /> : null}

          <Form>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </Form>
          <Form>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </Form>
        </Wrapper>
        <Section>
          <Button onClick={onClick}>Log In</Button>
        </Section>
      </Container>
    </>
  );
};

export default LogInPresenter;
