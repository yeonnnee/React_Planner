import React from "react";

import Welcome from "../../components/msg/WelcomeMessage";
import { Container, Section, Text, SLink, Button, Span } from "./styles";

const HomePresenter = () => {
  return (
    <Container>
      <Welcome />
      <Section>
        <Text>Already have an account?</Text>
        <SLink to="/logIn">
          <Button>로그인</Button>
        </SLink>
      </Section>
      <Span>or</Span>
      <Section>
        <Text>create your account</Text>
        <SLink to="/sign-up">
          <Button>회원가입</Button>
        </SLink>
      </Section>
    </Container>
  );
};

export default HomePresenter;
