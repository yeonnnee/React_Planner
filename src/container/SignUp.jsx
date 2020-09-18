import React, { useState } from "react";
import axios from "axios";

import {
  Container,
  Button,
  Title,
  Form,
  Label,
  Input,
  Wrapper,
  Section,
  Info,
  Error,
  CancelBtn,
  SLink,
} from "../presenter/SignUpPresenter";
import SuccessSignUp from "../components/SuccessSignUp";

const SignUp = () => {
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
    const target = event.target.id;
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
              <Label htmlFor="userID">아이디 :</Label>
              <Input
                type="text"
                placeholder="ID"
                value={state.user.userID}
                id="userID"
                onChange={onChange}
                error={
                  error.message !== "" && error.message.includes("아이디")
                    ? true
                    : false
                }
              />
            </Form>
            {/* ERROR MESSAGE */}
            {error.message !== "" && error.message.includes("아이디") ? (
              <Error>{error.message}</Error>
            ) : (
              <Info>* 영문 및 숫자로 조합된 6~20자</Info>
            )}
            <Form>
              <Label htmlFor="password">비밀번호 :</Label>
              <Input
                type="password"
                placeholder="Password"
                value={state.user.password}
                autocomplete="off"
                id="password"
                onChange={onChange}
                error={
                  error.message !== "" && error.message.includes("비밀번호")
                    ? true
                    : false
                }
              />
            </Form>
            {/* ERROR MESSAGE */}
            {error.message !== "" && error.message.includes("비밀번호") ? (
              <Error>{error.message}</Error>
            ) : (
              <Info>* 영문 대소문자, 숫자, 특수문자를 포함한 8~20자</Info>
            )}
            <Form>
              <Label htmlFor="confirmPassword">비밀번호 확인 :</Label>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={state.user.confirmPassword}
                autocomplete="off"
                id="confirmPassword"
                onChange={onChange}
                error={error.message.includes("일치") ? true : false}
              />
            </Form>
            {/* ERROR MESSAGE */}
            {error.message.includes("일치") ? (
              <Error>{error.message}</Error>
            ) : null}
            <Form>
              <Label htmlFor="name">이름 :</Label>
              <Input
                type="text"
                placeholder="Name"
                value={state.user.name}
                id="name"
                onChange={onChange}
                error={
                  error.message === "글자 수가 초과하였습니다." ||
                  error.message.includes("한글") ||
                  error.message === "유효하지 않은 글자가 포함되어 있습니다."
                    ? true
                    : false
                }
              />
            </Form>
            {/* ERROR MESSAGE */}
            {error.message === "글자 수가 초과하였습니다." ||
            error.message.includes("한글") ||
            error.message === "유효하지 않은 글자가 포함되어 있습니다." ? (
              <Error>{error.message}</Error>
            ) : null}
            <Form>
              <Label htmlFor="email">이메일 :</Label>
              <Input
                type="email"
                placeholder="Email"
                value={state.user.email}
                id="email"
                onChange={onChange}
                error={error.message.includes("이메일") ? true : false}
              />
            </Form>
            {/* ERROR MESSAGE */}
            {error.message.includes("이메일") ? (
              <Error>{error.message}</Error>
            ) : null}
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

export default SignUp;
