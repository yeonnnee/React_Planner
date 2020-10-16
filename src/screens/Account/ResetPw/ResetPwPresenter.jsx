import React from "react";
import styled from "styled-components";

import Input from "../../SignUp/SignUpInput";
import Loader from "../../../components/Loader";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Error = styled.div`
  position: relative;
  top: -20px;
  left: 35px;
  width: 300px;
  height: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: red;
  line-height: 1.5;
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
  &:active {
    background: linear-gradient(to right bottom, #b71540, #eb5757);
  }
`;
const ResetPwPresenter = (resetPwProps) => {
  const { onChange, state, onClick } = resetPwProps;
  return (
    <Container>
      <Text>비밀번호 변경</Text>
      {state.isLoading ? <Loader /> : null}
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
