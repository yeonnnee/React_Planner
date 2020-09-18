import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

import Header from "../components/WelcomeMessage";

const MoveDown = keyframes`
 from {
   transform: translateY(-150px);
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
const Error = styled.div`
  width: 100%;
  font-size: 12px;
  color: red;
  display: felx;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Section = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  height: 200px;
  animation: ${MoveDown} 1s linear;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Fredericka the Great", cursive;
  }
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

const LogInPresenter = () => {
  const [state, setState] = useState({ user: { userID: "", password: "" } });
  const [error, setError] = useState({ msg: "" });
  function setID(event) {
    const value = event.target.value;
    setError({ msg: "" });
    setState({
      user: {
        ...state.user,
        userID: value,
      },
    });
  }
  function setPassword(event) {
    const value = event.target.value;
    setError({ msg: "" });
    setState({
      user: {
        ...state.user,
        password: value,
      },
    });
  }
  async function logIn() {
    if (state.user.userID !== "" || state.user.password !== "") {
      const res = await axios.post("/api/user/logIn", state);
      console.log(res);
      if (res.data !== "logged In successfully") {
        setError({ msg: res.data });
      }
    }
  }
  return (
    <Container>
      <Header />
      <Section>
        <Error>{error.msg}</Error>
        <Form>
          <Input
            type="text"
            placeholder="ID"
            onChange={setID}
            value={state.user.userID}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            onChange={setPassword}
            value={state.user.password}
          ></Input>
          <Button onClick={logIn}>Log In</Button>
        </Form>
      </Section>
    </Container>
  );
};

export default LogInPresenter;
