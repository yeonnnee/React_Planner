import React from "react";

import Welcome from "../../components/msg/WelcomeMessage";
import { Section, Text, SLink, Button } from "./styles";
import { Container, Frame, Main } from "../../components/styles/Templates";

const HomePresenter = () => {
  return (
    <Container>
      <Frame>
        <Main>
          <Welcome />
          <Section>
            <Text>Already have an account?</Text>
            <SLink to="/logIn">
              <Button>로그인</Button>
            </SLink>
          </Section>
          <Section>or</Section>
          <Section>
            <Text>create your account</Text>
            <SLink to="/sign-up">
              <Button>회원가입</Button>
            </SLink>
          </Section>
        </Main>
      </Frame>
    </Container>
  );
};

export default HomePresenter;
