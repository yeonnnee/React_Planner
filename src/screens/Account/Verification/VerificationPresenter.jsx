import React from "react";

import ErrorMessage from "../../../components/msg/ErrorMessage";
import Loader from "../../../components/Loader";
import {
  Container,
  Header,
  Email,
  Text,
  Form,
  Input,
  Button,
} from "./VerificationStyle";

const VerificationPresenter = (verificationProps) => {
  const { user, state, onChange, onClick, value } = verificationProps;
  return (
    <Container>
      <Header>본인인증</Header>
      <Email>{user}</Email>
      <Text>계속하려면 먼저 본인임을 인증하세요.</Text>
      {state.isLoading ? <Loader /> : null}
      {value.error !== "" ? <ErrorMessage error={value.error} /> : null}
      <Form>
        <Input
          type="password"
          placeholder="비밀번호 입력"
          name="password"
          onChange={onChange}
        />
      </Form>
      <Button onClick={onClick}>다음</Button>
    </Container>
  );
};

export default VerificationPresenter;
