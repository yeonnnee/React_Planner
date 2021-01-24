import React from "react";

import Loader from "../../../components/Loader";
import Header from "../../../components/Header";
import { Container, Frame, Main } from "../../../components/styles/Templates";
import { Wrapper, Title, TitleText } from "../Record/styles";
import Error from "../../../components/msg/ErrorMessage";
import { Tag, Section, Text, Example, Input, Form, Button } from "./styles";

const EnrollPresenter = (enrollPresenterProps) => {
  const {
    getTitle,
    error,
    onSubmit,
    onClick,
    isLoading,
  } = enrollPresenterProps;

  return (
    <Container>
      <Frame>
        <Main>
          <Header />
          <Wrapper>
            <Title>
              <Tag>Enroll</Tag>
              <TitleText>Challenge</TitleText>
            </Title>
            {isLoading ? <Loader /> : null}
            <Section>
              <Text>
                주제를 등록하는 다음 날 부터 한달 동안 챌린지가 진행됩니다.
                <br />
                챌린지를 등록하고 매일 도전과제를 성공여부를 체크해보세요
                <br />
              </Text>

              <Text>아래 입력창에 도전하고 싶은신 주제를 입력해주세요</Text>
              <Example>
                예) 하루에 독서 1시간 챌린지 / 하루에 스쿼트 50개 챌린지 등등
              </Example>
            </Section>
            <Section>
              <Form onSubmit={onSubmit}>
                <Input
                  placeholder="예) 하루에 한 시간 운동하기"
                  error={error ? true : false}
                  onChange={getTitle}
                ></Input>
                {error ? <Error error={error} /> : null}
              </Form>
            </Section>

            <Section>
              <Button onClick={onClick}>등록하기</Button>
            </Section>
          </Wrapper>
        </Main>
      </Frame>
    </Container>
  );
};

export default EnrollPresenter;
