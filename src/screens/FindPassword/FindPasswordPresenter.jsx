import React from "react";

import Error from "../../components/msg/ErrorMessage";
import Loader from "../../components/Loader";
import { Container, Title, Text, Form, Input, Section, Button } from "./styles";

const FindPasswordPresenter = (findPwProps) => {
  const { state, user, onChange, onClick, onCancel } = findPwProps;
  return (
    <Container>
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
      <Section>
        <Button onClick={onClick}>확인</Button>
        <Button onClick={onCancel}>취소</Button>
      </Section>
    </Container>
  );
};

export default FindPasswordPresenter;
