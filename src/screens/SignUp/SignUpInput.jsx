import React from "react";

import { Form, Input, Info, Label } from "./styles";

const SignUpInput = (signUpInputProps) => {
  const { onChange, type, placeholder, error, value, id } = signUpInputProps;
  return (
    <>
      <Form>
        <Label htmlFor={id}>{id} :</Label>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={onChange}
          error={error}
        />
      </Form>
      {!error && id === "비밀번호" ? (
        <Info>*영문 대소문자, 숫자, 특수문자를 포함한 8~16자</Info>
      ) : null}
    </>
  );
};

export default SignUpInput;
