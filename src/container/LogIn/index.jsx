/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import UserID from "./LogID";
import Password from "./LogInPW";
import { TRY_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../../redux/types";
import Header from "../../components/WelcomeMessage";
import ErrorMessage from "../../components/ErrorMessage";
import {
  Container,
  Section,
  Wrapper,
  Button,
} from "../../presenter/LogInPresenter";
import Loader from "../../components/Loader";

const LogIn = ({ state, send, setError, success, history }) => {
  async function logIn() {
    if (state.user.userID === "" || state.user.password === "") {
      setError("아이디와 비밀번호를 입력해주시기 바랍니다");
    } else {
      send();
      const res = await axios.post("/api/user/logIn", state.user);
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
          <ErrorMessage {...state} />
          <UserID />
          <Password />
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
