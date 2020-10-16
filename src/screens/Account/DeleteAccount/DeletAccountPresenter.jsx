import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 450px;
  margin-left: 30px;
`;
export const Header = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;
export const Text = styled.div`
  font-size: 13px;
  margin-top: 10px;
  line-break: auto;
`;
const Section = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
`;
const Question = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const Option = styled.option``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  height: 50px;
`;
export const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "1px solid #baa7a1")};
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
`;
const Intro = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #efefef;
`;
const Notice = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  font-size: 13px;
  border-bottom: 1px solid #efefef;
  line-height: 1.5;
`;
const Error = styled.span`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;
const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  width: 120px;
  padding: 5px;
  height: 30px;
  margin-top: 20px;
  background: linear-gradient(to left top, #b71540, #eb5757);
`;

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
