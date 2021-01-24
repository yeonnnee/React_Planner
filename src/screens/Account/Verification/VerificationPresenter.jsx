import React from "react";

import ErrorMessage from "../../../components/msg/ErrorMessage";
import Loader from "../../../components/Loader";
import Header from "../../../components/Header";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Email, Text, Form, Input, Button, Section } from "./styles";

const VerificationPresenter = (verificationProps) => {
  const { user, state, onChange, onClick, value } = verificationProps;
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Text>본인인증</Text>
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
            <Button onClick={onClick}>확인</Button>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default VerificationPresenter;
