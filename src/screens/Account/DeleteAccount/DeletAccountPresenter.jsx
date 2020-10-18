import React from "react";

import {
  Container,
  Header,
  Text,
  Section,
  Question,
  Select,
  Option,
  Form,
  Input,
  Intro,
  Notice,
  Error,
  Button,
} from "./styles";

const DeleteAccountPresenter = (deleteAccountProps) => {
  const {
    user,
    onChange,
    onClick,
    onSelect,
    passwordError,
    error,
  } = deleteAccountProps;
  return (
    <Container>
      <Header>계정삭제</Header>
      <Intro>
        <Text>{user} 님 안녕하세요.</Text>
        <Text>계정을 삭제하신다니 아쉽습니다.</Text>
        <Text>그동안 저희 Planner와 함께해주셔서 감사합니다.</Text>
      </Intro>
      <Section>
        <Question>계정을 삭제하시는 이유가 무엇인가요?</Question>
        <Select name="reason" onChange={onSelect}>
          <Option value="">계정삭제 사유 선택</Option>
          <Option value="디자인">디자인이 마음에 안들어서</Option>
          <Option value="기능">원하는 기능이 없어서</Option>
          <Option value="불편">사용하기 불편해서</Option>
        </Select>
      </Section>
      {error ? <Error>{error}</Error> : null}
      <Form>
        <Question>계속하려면 비밀번호를 다시 입력하세요</Question>
        <Input
          type="password"
          placeholder="비밀번호 입력"
          name="password"
          onChange={onChange}
          error={passwordError}
        />
        {passwordError ? <Error>{passwordError}</Error> : null}
      </Form>

      <Notice>
        아래 버튼을 누르면 사용자에 대한 모든 데이터가 영구적으로 삭제되어
        복구할 수 없게 됩니다. 이후 계정을 만들 때 같은 이메일 주소로 다시
        가입할 수 없습니다.
      </Notice>
      <Button onClick={onClick}>내 계정 영구 삭제</Button>
    </Container>
  );
};
export default DeleteAccountPresenter;
