import React from "react";

import Error from "../../components/msg/ErrorMessage";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import { Section } from "../Account/Verification/styles";
import { Column } from "../SignUp/styles";
import { Title, Text, Form, Input, Button } from "./styles";

const FindPasswordPresenter = (findPwProps) => {
  const { state, user, onChange, onClick, onCancel } = findPwProps;
  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <Title>비밀번호 찾기</Title>
            <Text>비밀번호 재설정을 위해 이메일을 입력해 주세요</Text>
            {state.isLoading ? <Loader /> : null}
            {user.error ? <Error error={user.error} /> : null}
            <Form>
              <Input
                type="email"
                placeholder="이메일을 입력하세요"
                onChange={onChange}
              />
            </Form>
            <Column>
              <Button onClick={onClick}>확인</Button>
              <Button onClick={onCancel}>취소</Button>
            </Column>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default FindPasswordPresenter;
