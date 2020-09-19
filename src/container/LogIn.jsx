/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import UserID from "./SignUp/UserID";
import Password from "./SignUp/Password";
import { SEND_DATA, SEND_DATA_FAILED } from "../redux/actions";
import Header from "../components/WelcomeMessage";
import { Container, Section, Error, Button } from "../presenter/LogInPresenter";

const LogIn = ({ state, send, setError }) => {
  async function logIn() {
    if (state.user.userID === "" || state.user.password === "") {
      setError({ msg: "아이디와 비밀번호를 입력해주시기 바랍니다" });
    } else {
      send();
      const user = { userID: state.user.userID, password: state.user.password };
      const res = await axios.post("/api/user/logIn", user);
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
        <Error>{state.error}</Error>
        <UserID />
        <Password />
        <Button onClick={logIn}>Log In</Button>
      </Section>
    </Container>
  );
};

function mapStateToProps(state) {
  return { state: state.userReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    send: () => {
      dispatch({ type: SEND_DATA });
    },
    setError: (error) => {
      dispatch({ type: SEND_DATA_FAILED, payload: error });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
