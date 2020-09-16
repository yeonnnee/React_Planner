/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import SuccessSignUp from "../components/SuccessSignUp";

const MoveDown = keyframes`
 from {
   transform: translateY(-250px);
 }
 to{
   transform: translateY(0);
 }
`;

const Container = styled.div`
  height: 70%;
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
  font-family: "Life Savers", cursive;
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
  margin-bottom: 20px;
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
const Error = styled.div`
  font-size: 11px;
  position: relative;
  top: -10px;
  color: red;
`;
const CancelBtn = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-family: "Life Savers", cursive;

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
    user: {
      name: "",
      userID: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });
  const [error, setError] = useState({
    message: "",
  });
  const [status, setStatus] = useState({ result: "" });
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
      case "userID": {
        return setState({
          user: { ...state.user, userID: value },
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
    if (
      state.user.userID === "" ||
      state.user.password === "" ||
      state.user.confirmPassword === "" ||
      state.user.name === "" ||
      state.user.email === ""
    ) {
      setError({ message: "빈칸 없이 입력해주시기 바랍니다" });
    } else {
      const res = await axios.post("/api/user/signUp", state);
      console.log(res);
      if (res.data !== "Get data successfully") {
        setError({ message: res.data.msg });
        setStatus({ result: "Failed" });
      } else {
        setStatus({ result: "Success" });
      }
    }
  }
  return (
    <>
      {status.result === "Success" ? (
        <SuccessSignUp />
      ) : (
        <Container>
          <Title>SignUp</Title>
          {error.message.includes("빈칸") ? (
            <Error>빈칸없이 작성해주십시오</Error>
          ) : null}
          <Wrapper>
            <Form>
              <Input
                type="text"
                placeholder="ID"
                value={state.user.userID}
                name="userID"
                onChange={onChange}
                error={
                  error.message !== "" && error.message.includes("아이디")
                    ? true
                    : false
                }
              />
              {error.message !== "" && error.message.includes("아이디") ? (
                <Error>{error.message}</Error>
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
                  error.message !== "" && error.message.includes("비밀번호")
                    ? true
                    : false
                }
              />
              {error.message !== "" && error.message.includes("비밀번호") ? (
                <Error>{error.message}</Error>
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
                error={error.message.includes("일치") ? true : false}
              />
              {error.message.includes("일치") ? (
                <Error>{error.message}</Error>
              ) : null}
              <Input
                type="text"
                placeholder="Name"
                value={state.user.name}
                name="name"
                onChange={onChange}
                error={
                  error.message === "글자 수가 초과하였습니다." ||
                  error.message.includes("한글") ||
                  error.message === "유효하지 않은 글자가 포함되어 있습니다."
                    ? true
                    : false
                }
              />
              {error.message === "글자 수가 초과하였습니다." ||
              error.message.includes("한글") ||
              error.message === "유효하지 않은 글자가 포함되어 있습니다." ? (
                <Error>{error.message}</Error>
              ) : null}
              <Input
                type="email"
                placeholder="Email"
                value={state.user.email}
                name="email"
                onChange={onChange}
                error={error.message.includes("이메일") ? true : false}
              />
              {error.message.includes("이메일") ? (
                <Error>{error.message}</Error>
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
      )}
    </>
  );
};

export default SignUpPresenter;
