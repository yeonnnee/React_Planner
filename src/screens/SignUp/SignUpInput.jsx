import React from "react";

import { Form, Input, Info, Label, EmailForm, Select, Option } from "./styles";

const SignUpInput = (signUpInputProps) => {
  const {
    onChange,
    selectEmail,
    type,
    placeholder,
    error,
    value,
    id,
  } = signUpInputProps;
  return (
    <>
      <Form>
        <Label htmlFor={id}>{id} :</Label>

        {id === "이메일" ? (
          <EmailForm>
            <Input
              type={type}
              placeholder={placeholder}
              value={value}
              id={id}
              onChange={onChange}
              error={error}
            />
            @
            <Select name="email" onChange={selectEmail} error={error}>
              <Option value="">이메일 선택</Option>
              <Option value="gmail.com">gmail.com</Option>
              <Option value="naver.com">naver.com</Option>
              <Option value="hanmail.net">hanmail.net</Option>
            </Select>
          </EmailForm>
        ) : (
          <Input
            type={type}
            placeholder={placeholder}
            value={value}
            id={id}
            onChange={onChange}
            error={error}
          />
        )}
      </Form>
      {!error && id === "비밀번호" ? (
        <Info>*영문 대소문자, 숫자, 특수문자를 포함한 8~16자</Info>
      ) : null}
    </>
  );
};

export default SignUpInput;
