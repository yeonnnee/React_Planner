import React from "react";

import Input from "../../SignUp/SignUpInput";
import Loader from "../../../components/Loader";
import Header from "../../../components/Header";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Section, Text } from "../Verification/styles";
import { Error, Button, Notice } from "./styles";

const ResetPwPresenter = (resetPwProps) => {
  const { onChange, state, onClick } = resetPwProps;
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Text>비밀번호 변경</Text>

            {state.isLoading ? (
              <Loader />
            ) : (
              <Notice>
                *비밀번호는 영대소문자, 특수문자, 숫자를 포함한 8~16자로 작성해
                주십시오
              </Notice>
            )}
            <Input
              type="password"
              placeholder="Password"
              id="새 비밀번호"
              onChange={onChange}
              error={state.validation.updatedPassword ? true : false}
            />
            {state.validation.updatedPassword ? (
              <Error>{state.validation.updatedPassword}</Error>
            ) : null}

            <Input
              type="password"
              placeholder="Confirm Password"
              id="비밀번호 재입력"
              onChange={onChange}
              error={state.validation.confirmPassword ? true : false}
            />
            {state.validation.confirmPassword ? (
              <Error>{state.validation.confirmPassword}</Error>
            ) : null}

            <Button onClick={onClick}>비밀번호 변경</Button>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default ResetPwPresenter;
