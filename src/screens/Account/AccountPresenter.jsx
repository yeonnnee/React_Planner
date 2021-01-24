import React from "react";

import Header from "../../components/Header";
import { Container, Frame, Main } from "../../components/styles/Templates";
import { Section, AccountLink, DropDownList, LogOutBtn } from "./styles";

const AccountPresenter = (accountProps) => {
  const { onClick } = accountProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Section>
            <AccountLink to="account/reset-password">
              <DropDownList>비밀번호 변경</DropDownList>
            </AccountLink>
            <AccountLink to="account/delete-account">
              <DropDownList>계정삭제</DropDownList>
            </AccountLink>
            <LogOutBtn onClick={onClick}>로그아웃</LogOutBtn>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default AccountPresenter;
