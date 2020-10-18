import React from "react";

import Input from "../../SignUp/SignUpInput";
import Loader from "../../../components/Loader";
import { Container, Text, Section, Error, Button } from "./styles";

const ResetPwPresenter = (resetPwProps) => {
  const { onChange, state, onClick } = resetPwProps;
  return (
    <Container>
      <Text>비밀번호 변경</Text>
      {state.isLoading ? (
        <Section>
          <Loader />
        </Section>
      ) : null}
      <Input
        type="password"
        placeholder="Password"
        id="새 비밀번호"
        onChange={onChange}
        error={state.validation.updatedPassword !== "" ? true : false}
      />
      {state.validation.updatedPassword !== "" ? (
        <Error>{state.validation.updatedPassword}</Error>
      ) : null}

      <Input
        type="password"
        placeholder="Confirm Password"
        id="비밀번호 재입력"
        onChange={onChange}
        error={state.validation.confirmPassword !== "" ? true : false}
      />
      {state.validation.confirmPassword !== "" ? (
        <Error>{state.validation.confirmPassword}</Error>
      ) : null}

      <Button onClick={onClick}>비밀번호 변경</Button>
    </Container>
  );
};

export default ResetPwPresenter;
