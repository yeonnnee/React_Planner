import React from "react";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import SignUpInput from "./SignUpInput";
import ErrorMessage from "../../components/msg/ErrorMessage";
import { Button } from "../../components/Button";
import { Title, Wrapper, Section, Error, Column } from "./styles";

const SignUpPresenter = (signUpProps) => {
  const { state, onSubmit, onChange, onCancel, selectEmail } = signUpProps;
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Title>회원가입</Title>

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
                selectEmail={selectEmail}
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
            <Column>
              <Button onClick={onSubmit} text="확인" />
              <Button onClick={onCancel} text="취소" />
            </Column>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default SignUpPresenter;
