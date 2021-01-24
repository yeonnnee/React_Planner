import React from "react";

import { Question, Input, Error } from "./styles";

const DeleteAccountInput = (inputProps) => {
  const { onChange, passwordError } = inputProps;

  return (
    <>
      <Question>계속하려면 비밀번호를 다시 입력하세요</Question>
      <Input
        type="password"
        placeholder="비밀번호 입력"
        name="password"
        onChange={onChange}
        error={passwordError}
      />
      {passwordError ? <Error>{passwordError}</Error> : null}
    </>
  );
};

export default DeleteAccountInput;
