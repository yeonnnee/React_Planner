import React from "react";

import Loader from "../../../components/Loader";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal";
import { Container, Frame, Main } from "../../../components/styles/Templates";

import {
  Wrapper,
  Title,
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
  CheckBox,
  CheckForm,
} from "./styles";

const DeleteAccountPresenter = (deleteAccountProps) => {
  const {
    user,
    onChange,
    onSelect,
    deleteAccount,
    checkError,
    cancel,
    passwordError,
    isLoading,
    error,
    checkBoxError,
    changeCheckBoxStatus,
    modalStatus,
  } = deleteAccountProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            <Title>계정삭제</Title>
            <Intro>
              <Text>
                {user} 님 안녕하세요.
                <br />
                계정을 삭제하신다니 아쉽습니다.
                <br />
                그동안 저희 Y Planner와 함께해주셔서 감사합니다.
              </Text>
            </Intro>
            <Section>
              <Question>계정을 삭제하시는 이유가 무엇인가요?</Question>
              <Select name="reason" onChange={onSelect}>
                <Option value="">계정삭제 사유 선택</Option>
                <Option value="디자인">디자인이 마음에 안들어서</Option>
                <Option value="기능">원하는 기능이 없어서</Option>
                <Option value="불편">사용하기 불편해서</Option>
              </Select>
              {error ? <Error>{error}</Error> : null}
            </Section>

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
              복구할 수 없게 됩니다. <br />
              이후 계정을 만들 때 같은 이메일 주소로 다시 가입할 수 없습니다.
              <CheckForm>
                <CheckBox type="checkbox" onClick={changeCheckBoxStatus} />
                위의 내용을 확인하였습니다.
                {checkBoxError ? <Error>{checkBoxError}</Error> : null}
              </CheckForm>
            </Notice>

            <Button onClick={checkError}>내 계정 영구 삭제</Button>
            {modalStatus === "display" ? (
              <Modal
                message="정말 계정을 삭제하시겠습니까?"
                confirm={deleteAccount}
                cancel={cancel}
              />
            ) : null}
            {isLoading ? <Loader /> : null}
          </Wrapper>
        </Main>
      </Frame>
    </Container>
  );
};
export default DeleteAccountPresenter;
