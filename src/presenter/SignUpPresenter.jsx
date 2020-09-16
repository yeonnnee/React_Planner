/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

// import UserId from "../components/signUp/userId";

const MoveDown = keyframes`
 from {
   transform: translateY(-250px);
 }
 to{
   transform: translateY(0);
 }
`;

const Container = styled.div`
  height: 60%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fredericka the Great", cursive;
  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;
const Title = styled.span`
  font-size: 25px;
  /* font-family: "Fredericka the Great", cursive; */
  font-family: "Cinzel Decorative", cursive;
`;

const Form = styled.form`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  animation: ${MoveDown} 1s linear;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px 20px;
  outline: none;
  border: ${(props) => (props.error ? "1px solid red" : "none")};
  border-radius: 5px;
`;
const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
`;
const Section = styled.div`
  display: flex;
  animation: ${MoveDown} 1s linear;
`;
const Info = styled.div`
  font-size: 11px;
  position: relative;
  top: -10px;
`;
const CancelBtn = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-family: "Fredericka the Great", cursive;

  cursor: pointer;
  &:hover {
    background-color: #30475e;
    color: white;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
`;

const SignUpPresenter = () => {
  const [state, setState] = useState({
    user: { name: "", id: "", password: "", confirmPassword: "", email: "" },
  });
  const [error, setError] = useState({
    message: "",
  });
  function onChange(event) {
    const target = event.target.name;
    const value = event.target.value;
    setError({ message: "" });
    switch (target) {
      case "name": {
        return setState({
          user: { ...state.user, name: value },
        });
      }
      case "password": {
        return setState({
          user: { ...state.user, password: value },
        });
      }
      case "confirmPassword": {
        return setState({
          user: { ...state.user, confirmPassword: value },
        });
      }
      case "id": {
        return setState({
          user: { ...state.user, id: value },
        });
      }
      case "email": {
        return setState({
          user: { ...state.user, email: value },
        });
      }
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    const res = await axios.post("/api/user/signUp", state);
    console.log(res);
    setError({ message: res.data.msg });
  }
  return (
    <Container>
      <Title>Sign Up</Title>
      <Wrapper>
        <Form>
          <Input
            type="text"
            placeholder="ID"
            value={state.user.id}
            name="id"
            onChange={onChange}
            error={
              error.message !== "" && error.message.includes("아이디는")
                ? true
                : false
            }
          />
          {error.message !== "" && error.message.includes("아이디는") ? (
            <Info>{error.message}</Info>
          ) : (
            <Info>* 영문 및 숫자로 조합된 6~20자</Info>
          )}

          <Input
            type="password"
            placeholder="Password"
            value={state.user.password}
            autocomplete="off"
            name="password"
            onChange={onChange}
            error={
              error.message !== "" && error.message.includes("비밀번호는")
                ? true
                : false
            }
          />
          {error.message !== "" && error.message.includes("비밀번호는") ? (
            <Info>{error.message}</Info>
          ) : (
            <Info>* 영문 대소문자, 숫자, 특수문자를 포함한 8~20자</Info>
          )}

          <Input
            type="password"
            placeholder="Confirm Password"
            value={state.user.confirmPassword}
            autocomplete="off"
            name="confirmPassword"
            onChange={onChange}
            error={
              error.message === "비밀번호가 일치하지 않습니다" ? true : false
            }
          />
          {error.message === "비밀번호가 일치하지 않습니다" ? (
            <Info>{error.message}</Info>
          ) : null}
          <Input
            type="text"
            placeholder="Name"
            value={state.user.name}
            name="name"
            onChange={onChange}
            error={
              error.message === "글자 수가 초과하였습니다." ||
              error.message.includes("한글로") ||
              error.message === "유효하지 않은 글자가 포함되어 있습니다."
                ? true
                : false
            }
          />
          {error.message === "글자 수가 초과하였습니다." ||
          error.message.includes("한글로") ||
          error.message === "유효하지 않은 글자가 포함되어 있습니다." ? (
            <Info>{error.message}</Info>
          ) : null}
          <Input
            type="email"
            placeholder="Email"
            value={state.user.email}
            name="email"
            onChange={onChange}
            error={
              error.message === "유효하지 않은 이메일입니다" ? true : false
            }
          />
          {error.message === "유효하지 않은 이메일입니다" ? (
            <Info>{error.message}</Info>
          ) : null}
        </Form>
      </Wrapper>
      <Section>
        <Button onClick={onSubmit}>Submit</Button>
        <SLink to="/">
          <CancelBtn>Cancel</CancelBtn>
        </SLink>
      </Section>
    </Container>
  );
};

export default SignUpPresenter;
