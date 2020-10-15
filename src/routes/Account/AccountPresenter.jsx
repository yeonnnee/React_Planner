import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { authApi } from "../../api";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  height: 30px;
  display: flex;

  padding-left: 10px;
`;

const EnTitle = styled.span`
  font-family: "Sacramento", cursive;
  font-size: 25px;
  position: relative;
  top: 18px;
`;
const UserSection = styled.div`
  width: 100%;
  height: 370px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AccountLink = styled(Link)`
  text-decoration: none;
  width: 90%;
`;
const DropDownList = styled.button`
  width: 100%;
  height: 50px;
  border-top: 1px solid #baa7a1;
  border-bottom: none;
  border-left: none;
  border-right: none;
  background: none;
  outline: none;
  &:hover {
    background-color: #efefef;
  }
`;

const LogOutBtn = styled.button`
  width: 90%;
  height: 50px;
  outline: none;
  border-top: 1px solid #baa7a1;
  border-bottom: 1px solid #baa7a1;
  border-left: none;
  border-right: none;
  background: none;

  &:hover {
    background-color: #efefef;
  }
`;

const Frame = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50px;
  border: 1px solid #baa7a1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Pic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: rgb(186, 186, 248);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserIconHead = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background-color: rgb(210, 210, 247);
  margin-bottom: 3px;
`;
const UserIconBody = styled.div`
  width: 55px;
  height: 20px;
  border-radius: 20px 20px 0 0;
  background-color: rgb(210, 210, 247);
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Info = styled.div`
  margin-bottom: 8px;
  &:nth-child(2) {
    font-size: 12px;
  }
`;
const AccountPresenter = (accountProps) => {
  const { logOut, state } = accountProps;
  async function onClick() {
    try {
      await authApi.logOut();
      logOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header>
        <EnTitle>Account</EnTitle>
      </Header>
      <UserSection>
        <Frame>
          <Pic>
            <UserIconHead />
            <UserIconBody />
          </Pic>
        </Frame>

        <User>
          <Info>{state.name}</Info>
          <Info>{state.user}</Info>
        </User>
        <AccountLink to="/reset-password">
          <DropDownList>비밀번호 변경</DropDownList>
        </AccountLink>
        <AccountLink to="/delete-account">
          <DropDownList>계정삭제</DropDownList>
        </AccountLink>

        <LogOutBtn onClick={onClick}>로그아웃</LogOutBtn>
      </UserSection>
    </Container>
  );
};

export default AccountPresenter;
