import React from "react";
import styled from "styled-components";

import Error from "../../components/msg/ErrorMessage";
import Loader from "../../components/Loader";

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
`;
const Text = styled.div`
  font-size: 13px;
  margin-top: 20px;
`;

const Form = styled.form`
  margin-top: 30px;
`;
const Input = styled.input`
  outline: none;
  width: 350px;
  padding: 10px 20px;
`;
const Section = styled.div`
  margin-top: 30px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  outline: none;
`;

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
