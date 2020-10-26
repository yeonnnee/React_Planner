import React from "react";

import {
  Container,
  Header,
  Title,
  Tag,
  Section,
  Text,
  Example,
  Input,
  Form,
  Button,
} from "./styles";

const EnrollPresenter = () => {
  return (
    <Container>
      <Header>
        <Tag>Enroll</Tag>
        <Title>Challenge</Title>
      </Header>
      <Section>
        <Text>주제를 등록하는 다음 날 부터 한달 동안 챌린지가 진행됩니다.</Text>
        <Text>챌린지를 등록하고 매일 도전과제를 성공여부를 체크해보세요</Text>
        <Text>아래 입력창에 도전하고 싶은신 주제를 입력해주세요</Text>
        <Example>
          예) 하루에 독서 1시간 챌린지 / 하루에 스쿼트 50개 챌린지 등등
        </Example>
      </Section>

      <Form>
        <Input placeholder="예) 하루에 한 시간 운동하기"></Input>
      </Form>
      <Button>등록하기</Button>
    </Container>
  );
};

export default EnrollPresenter;
