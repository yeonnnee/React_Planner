import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import { Button } from "../../components/Button";
import { SLink, Text, Question, Section } from "./styles";

const SignUpSuccess = (signUpSuccessProps) => {
  const { state } = signUpSuccessProps;
  return (
    <>
      {state.isAuthenticated ? (
        <Redirect to="/tasks" />
      ) : (
        <Container>
          <Frame>
            <Main>
              <Header />
              <Section>
                <Text>Account Successfuly Created</Text>
                <Question>로그인 하시겠습니까?</Question>
                <SLink to="/logIn">
                  <Button text="로그인" />
                </SLink>
              </Section>
            </Main>
          </Frame>
        </Container>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.authReducer };
}

export default connect(mapStateToProps)(SignUpSuccess);
