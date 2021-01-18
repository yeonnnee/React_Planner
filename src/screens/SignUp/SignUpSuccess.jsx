import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import WelcomeMessage from "../../components/Header";
import { SLink, Text, Container, Question, Button } from "./styles";

const SignUpSuccess = (signUpSuccessProps) => {
  const { state } = signUpSuccessProps;
  return (
    <>
      {state.isAuthenticated ? (
        <Redirect to="/tasks" />
      ) : (
        <Container>
          <WelcomeMessage />
          <Text>Account Successfuly Created</Text>
          <Question>로그인 하시겠습니까?</Question>
          <SLink to="/logIn">
            <Button>로그인</Button>
          </SLink>
        </Container>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(SignUpSuccess);
