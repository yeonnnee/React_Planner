/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { TRY_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../../redux/types";
import Loader from "../../components/Loader";
import Header from "../../components/WelcomeMessage";
import ErrorMessage from "../../components/ErrorMessage";
import {
  Container,
  Section,
  Wrapper,
  Button,
  Form,
  Input,
} from "../../presenter/LogInPresenter";

const LogIn = ({ state, send, setError, success, history }) => {
  const [user, setUser] = useState({ userID: "", password: "" });

  function onChange(event) {
    const target = event.target;
    if (target.name === "userID") {
      const value = target.value;
      setUser({ ...user, userID: value });
    }
    if (target.name === "password") {
      const value = target.value;
      setUser({ ...user, password: value });
    }
  }

  async function logIn() {
    if (user.userID === "" || user.password === "") {
      setError("아이디와 비밀번호를 입력해주시기 바랍니다");
    } else {
      send();
      setError("");
      const res = await axios.post("/api/auth/logIn", user);
      console.log(res);

      if (res.data !== "logged In successfully") {
        setError(res.data);
      } else {
        success();
        history.push("/tasks");
      }
    }
  }
  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          {state.isLoading ? <Loader /> : null}
          {state.error !== "" ? <ErrorMessage {...state} /> : null}

          <Form>
            <Input
              type="text"
              placeholder="ID"
              name="userID"
              value={user.userID}
              onChange={onChange}
            />
          </Form>
          <Form>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={onChange}
            />
          </Form>
        </Wrapper>
        <Section>
          <Button onClick={logIn}>Log In</Button>
        </Section>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    send: () => {
      dispatch({ type: TRY_LOGIN });
    },
    setError: (error) => {
      dispatch({ type: LOGIN_FAILED, payload: error });
    },
    success: () => {
      dispatch({ type: LOGIN_SUCCESS });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
