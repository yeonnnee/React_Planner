import React from "react";
import styled from "styled-components";

const Form = styled.div`
  height: 60px;
  width: 100%;
  margin: 5px 30px;
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 105px 400px;
  gap: 10px;
`;
const Label = styled.label`
  font-size: 13px;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Input = styled.input`
  width: 60%;
  padding: 10px 20px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "none")};
  border-radius: 5px;
  &:focus {
    border: ${(props) => (props.error ? "1px solid red" : "2px solid #20639b")};
  }
`;

const Info = styled.div`
  width: 60%;
  margin: 0 31%;
  font-size: 11px;
  display: flex;
  line-height: 1.5;
  align-items: center;
  position: relative;
  top: -18px;
`;
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
