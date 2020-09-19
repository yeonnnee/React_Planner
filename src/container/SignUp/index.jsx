/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import SuccessSignUp from "../../components/SuccessSignUp";
import UserID from "./UserID";
import UserPassword from "./Password";
import ConfirmPassword from "./ConfirmPW";
import UserName from "./UserName";
import UserEmail from "./UserEmail";
import {
  Container,
  Button,
  Title,
  Wrapper,
  Section,
  CancelBtn,
  SLink,
  Notice,
} from "../../presenter/SignUpPresenter";

import {
  SEND_DATA,
  SEND_DATA_FAILED,
  SEND_DATA_SUCCESS,
} from "../../redux/actions";

const SignUp = ({ state, send, setError, success }) => {
  async function onSubmit(event) {
    event.preventDefault();
    if (
      state.user.userID === "" ||
      state.user.password === "" ||
      state.user.confirmPassword === "" ||
      state.user.name === "" ||
      state.user.email === ""
    ) {
      setError("빈칸 없이 입력해주시기 바랍니다");
    } else {
      send();
      const res = await axios.post("/api/user/signUp", state.user);
      console.log(res);

      if (res.data !== "Get data successfully") {
        setError(res.data.msg);
      } else {
        success();
      }
    }
  }
  return (
    <>
      {state.result === "SUCCESS" ? (
        <SuccessSignUp />
      ) : (
        <Container>
          <Title>Sign Up</Title>
          {state.error.includes("빈칸") ? (
            <Notice>빈칸없이 작성해주십시오</Notice>
          ) : null}
          {state.isLoading === true ? <Notice>Loading...</Notice> : null}
          <Wrapper>
            <UserID />
            <UserPassword />
            <ConfirmPassword />
            <UserName />
            <UserEmail />
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
    success: () => {
      dispatch({ type: SEND_DATA_SUCCESS });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
