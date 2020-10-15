import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ErrorMessage from "../../components/msg/ErrorMessage";
import { accountApi } from "../../api";
import {
  CHECK_USER_FAILED,
  CHECK_USER,
  CHECK_USER_SUCCESS,
} from "../../redux/types";
import Loader from "../../components/Loader";

const Container = styled.div`
  width: 80%;
  height: 300px;
  border: 1px solid #baa7a1;
  border-radius: 10px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;
const Email = styled.span`
  padding: 5px 10px;
  border: 1px solid #baa7a1;
  border-radius: 20px;
`;
const Text = styled.div`
  font-size: 15px;
  margin-top: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 50px;
`;
const Input = styled.input`
  width: 80%;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  &::placeholder {
    font-family: "Life Savers", cursive;
  }
  &:focus {
    border: 1px solid #baa7a1;
  }
`;
const Button = styled.button`
  outline: none;
  border: 1px solid #baa7a1;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background: none;
  &:hover {
    background-color: #efefef;
  }
`;

const CheckUser = (checkUserProps) => {
  const { user, state, comparePw, success, failed } = checkUserProps;
  const [value, setValue] = useState({ password: "", error: "" });

  const onChange = (event) => {
    const target = event.target;
    const value = target.value;
    setValue({ password: value, error: "" });
  };
  async function checkPw() {
    try {
      comparePw();
      await accountApi.checkUser({ password: value.password });
      success();
    } catch (error) {
      failed();
      console.log("error", error.response);
      if (error.response.status === 400) {
        setValue({ ...state, error: error.response.data.msg });
      }
    }
  }
  const onClick = () => {
    if (value.password === "") {
      setValue({ ...value, error: "비밀번호를 입력해주시기 바랍니다" });
    } else if (value.password.length > 20) {
      setValue({ ...value, error: "비밀번호는 8~12자리로 입력해주십시오" });
    } else {
      setValue({ ...value, error: "" });
      checkPw();
    }
  };

  return (
    <Container>
      <Header>본인인증</Header>
      <Email>{user}</Email>
      <Text>계속하려면 먼저 본인임을 인증하세요.</Text>
      {state.isLoading ? <Loader /> : null}
      {value.error !== "" ? <ErrorMessage error={value.error} /> : null}
      <Form>
        <Input
          type="password"
          placeholder="비밀번호 입력"
          name="password"
          onChange={onChange}
        />
      </Form>
      <Button onClick={onClick}>다음</Button>
    </Container>
  );
};

function mapStateToProps(state) {
  return { state: state.accountReducer };
}
function mapDispatchToProps(dispatch) {
  return {
    comparePw: () => {
      dispatch({ type: CHECK_USER });
    },
    success: () => {
      dispatch({ type: CHECK_USER_SUCCESS });
    },
    failed: () => {
      dispatch({ type: CHECK_USER_FAILED });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckUser);
