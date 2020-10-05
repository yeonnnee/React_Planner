import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import WelcomeMessage from "../../components/msg/WelcomeMessage";

const SLink = styled(Link)`
  text-decoration: none;
  color: #382933;
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
const Text = styled.div`
  font-size: 18px;
  font-family: "Life Savers", cursive;
`;
const Container = styled.div`
  height: 50%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

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
          <p>로그인 하시겠습니까?</p>
          <SLink to="/logIn">
            <Button>LogIn</Button>
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
